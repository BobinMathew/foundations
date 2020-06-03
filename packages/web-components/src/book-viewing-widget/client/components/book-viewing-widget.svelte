<script>
  import { css } from 'emotion'
  import { getProperty } from '../api/property'
  import { generateThemeClasses, resetCSS } from '../../../common/styles'
  import { onMount, onDestroy } from 'svelte'
  import Modal from './modal.svelte'
  import viewBookingStore from '../core/store'
  import { validateEmail } from '../../../common/utils/validate'

  export let theme
  export let apiKey
  export let customerId
  export let parentSelector
  export let submitAction

  let isModalOpen = false
  let isLoading

  let email
  let inputValue

  let propertyData

  let backgroundImage
  let correctEmail = true

  const themeClasses = generateThemeClasses(theme, parentSelector)

  function handleToggleModal() {
    isModalOpen = !isModalOpen
  }

  function handleInput({ target }) {
    inputValue = target.value
    viewBookingStore.update(values => ({
      ...values,
      email: inputValue,
    }))
  }

  function submitForm() {
    correctEmail = validateEmail(email)
    correctEmail && submitAction && submitAction(email)
  }

  const unsubscribe = viewBookingStore.subscribe(store => {
    isLoading = store.isLoading
    email = store.email
    propertyData = store.propertyData
  })

  function updateImage(propertyData) {
    backgroundImage = css`
      background: url(${propertyData && propertyData.image});
    `
  }
  $: updateImage(propertyData)

  onMount(async () => {
    isLoading = true
    const propertyData = await getProperty()
    viewBookingStore.update(values => ({
      ...values,
      initializers: {
        theme,
        apiKey,
        customerId,
        parentSelector,
      },
      themeClasses,
      propertyData,
    }))
    isLoading = false
  })

  onDestroy(() => unsubscribe())
</script>

<style>
  .book-viewing-widget-button {
    padding: 0.5em;
    font-size: 1em;
  }
  .book-viewing-widget-email-form {
    padding: 0.5em;
  }
  .book-viewing-widget-email-form::after {
    content: '';
    clear: both;
    display: block;
  }
  .book-viewing-widget-email-form p {
    padding: 0.5em 0;
    line-height: 1em;
  }
  .book-viewing-widget-email-form label {
    float: left;
    padding: 0.5em 0;
    line-height: 1em;
  }
  .book-viewing-widget-email-form input {
    width: 70%;
    float: right;
    height: 2em;
    border-radius: 0.25em;
    outline: none;
    padding: 0 0.5em;
  }
  .property-image {
    background-size: cover;
    padding: 1em;
    padding-top: 62.5%;
    position: relative;
  }
  .property-image h4 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.5em;
    box-sizing: border-box;
    font-size: 1.1em;
    background: linear-gradient(transparent, #c8c8c8);
  }
  .property-image h4 strong {
    float: right;
    font-weight: 600;
  }
  .book-viewing-widget-form-submit {
    width: 100%;
    padding: 0.5em 0.5em 1em;
    box-sizing: border-box;
  }
  .book-viewing-widget-form-submit button {
    width: 100%;
    padding: 0.3em;
    border-radius: 0.25em;
    cursor: pointer;
  }

  .invalid-email {
    float: right;
    color: #d8000c;
    font-size: 0.8em;
    padding: 0.5em;
  }
</style>

<button on:click={handleToggleModal} class="book-viewing-widget-button">Book a viewing</button>
<Modal {isModalOpen} toggleModal={handleToggleModal} {isLoading} title="Book a Viewing">

  <form on:submit|preventDefault={submitForm} class="{themeClasses.globalStyles} {resetCSS}">
    <div class="property-image {backgroundImage}">
      <h4>
        {propertyData && propertyData.address}
        <strong>{propertyData && propertyData.price}</strong>
      </h4>
    </div>
    <div class="book-viewing-widget-email-form">
      <p class={themeClasses.bodyText}>To book a viewing, please enter your e-mail below.</p>
      <label class={themeClasses.secondaryStrapline} for="book-viewing-widget-email">E-mail*</label>
      <input
        class={themeClasses.input}
        type="email"
        id="book-viewing-widget-email"
        on:input={handleInput}
        placeholder="Your e-mail address" />
      {#if !correctEmail}
        <span class="invalid-email {themeClasses.errorText}">Please enter a valid e-mail address</span>
      {/if}
    </div>
    <div class="book-viewing-widget-form-submit">
      <button class={themeClasses.button} type="submit">Get Appointments</button>
    </div>
  </form>

</Modal>