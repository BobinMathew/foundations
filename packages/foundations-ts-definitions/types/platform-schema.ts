/**
 * The details specific to applicants with a marketingMode of buying
 */
export interface ApplicantBuyingModel {
  /**
   * The lower bound of the applicant's budget
   */
  priceFrom?: number // int32
  /**
   * The upper bound of the applicant's budget
   */
  priceTo?: number // int32
}
/**
 * Representation of the physical address of a building or premise
 */
export interface ApplicantContactAddressModel {
  /**
   * The building name
   */
  buildingName?: string
  /**
   * The building number
   */
  buildingNumber?: string
  /**
   * The first line of the address
   */
  line1?: string
  /**
   * The second line of the address
   */
  line2?: string
  /**
   * The third line of the address
   */
  line3?: string
  /**
   * The fourth line of the address
   */
  line4?: string
  /**
   * The postcode
   */
  postcode?: string
  /**
   * The ISO-3166 country code that the address resides within
   */
  countryId?: string
}
/**
 * A summarised view of the details of a contact associated to an applicant
 */
export interface ApplicantContactModel {
  /**
   * The unique identifier of the contact
   */
  id?: string
  /**
   * The name of the contact
   */
  name?: string
  /**
   * The type of the contact (company/contact)
   */
  type?: string
  /**
   * The home phone number of the contact
   */
  homePhone?: string
  /**
   * The work phone number of the contact
   */
  workPhone?: string
  /**
   * The mobile phone number of the contact
   */
  mobilePhone?: string
  /**
   * The email address of the contact
   */
  email?: string
  /**
   * The primary address of the contact
   */
  primaryAddress?: {
    /**
     * The building name
     */
    buildingName?: string
    /**
     * The building number
     */
    buildingNumber?: string
    /**
     * The first line of the address
     */
    line1?: string
    /**
     * The second line of the address
     */
    line2?: string
    /**
     * The third line of the address
     */
    line3?: string
    /**
     * The fourth line of the address
     */
    line4?: string
    /**
     * The postcode
     */
    postcode?: string
    /**
     * The ISO-3166 country code that the address resides within
     */
    countryId?: string
  }
  readonly _links?: {
    [name: string]: {
      href?: string
    }
  }
  readonly _embedded?: {
    [name: string]: any
  }
}
/**
 * The applicant's outdoor space requirements
 */
export interface ApplicantExternalAreaModel {
  /**
   * The unit of area that each amount corresponds to (acres/hectares)
   */
  type?: string
  /**
   * The minimum unit value of outside space that the applicant is looking for
   */
  amountFrom?: number // double
  /**
   * The maximum unit value of outside space that the applicant is looking for
   */
  amountTo?: number // double
}
/**
 * The applicant's indoor space requirements
 */
export interface ApplicantInternalAreaModel {
  /**
   * The unit of area that each amount corresponds to (squareFeet/squareMetres)
   */
  type?: string
  /**
   * The unit value of inside space that the applicant is looking for
   */
  amount?: number // double
}
/**
 * Representation of an applicant
 */
export interface ApplicantModel {
  /**
   * The unique identifier of the applicant
   */
  id?: string
  /**
   * The date and time when the applicant was created
   */
  created?: string // date-time
  /**
   * The date and time when the applicant was last modified
   */
  modified?: string // date-time
  /**
   * Indicates whether the applicant is look to buy or rent a property (buying/renting)
   */
  marketingMode?: string
  /**
   * The ISO-4217 currency code that relates to monetary amounts specified by this applicant
   */
  currency?: string
  /**
   * A flag determining whether or not the applicant is actively looking for a property
   */
  active?: boolean
  /**
   * A free text field describing any adhoc buying or renting requirements
   */
  notes?: string
  /**
   * The date when the applicant was last contacted
   */
  lastCall?: string // date-time
  /**
   * The date when the applicant is next due to be contacted
   */
  nextCall?: string // date-time
  /**
   * The unique identifier of the department that the applicant requirements are associated with. This applicant will only match to properties with the same value
   */
  departmentId?: string
  /**
   * The unique identifier of the solicitor associated to this applicant
   */
  solicitorId?: string
  /**
   * A list of property type requirements taken from the full listing of the associated department
   */
  type?: string[]
  /**
   * A list of property style requirements taken from the full listing of the associated department
   */
  style?: string[]
  /**
   * A list of property situation requirements taken from the full listing of the associated department
   */
  situation?: string[]
  /**
   * A list of property parking requirements taken from the full listing of the associated department
   */
  parking?: string[]
  /**
   * A list of property age requirements taken from the full listing of the associated department
   */
  age?: string[]
  /**
   * A list of property locality requirements taken from the full listing of the associated department
   */
  locality?: string[]
  /**
   * The minimum number of bedrooms the applicant requires
   */
  bedroomsMin?: number // int32
  /**
   * The maximum number of bedrooms the applicant requires
   */
  bedroomsMax?: number // int32
  /**
   * The minimum number of reception rooms the applicant requires
   */
  receptionsMin?: number // int32
  /**
   * The maximum number of reception rooms the applicant requires
   */
  receptionsMax?: number // int32
  /**
   * The minimum number of bathrooms the applicant requires
   */
  bathroomsMin?: number // int32
  /**
   * The maximum number of bathrooms the applicant requires
   */
  bathroomsMax?: number // int32
  /**
   * The applicants location type (areas/addresses/none)
   */
  locationType?: string
  /**
   * The applicants location options
   */
  locationOptions?: string[]
  /**
   * The details specific to applicants with a marketingMode of buying
   */
  buying?: {
    /**
     * The lower bound of the applicant's budget
     */
    priceFrom?: number // int32
    /**
     * The upper bound of the applicant's budget
     */
    priceTo?: number // int32
  }
  /**
   * The details specific to applicants with a marketingMode of renting
   */
  renting?: {
    /**
     * The date the applicant is looking to move to a new property
     */
    moveDate?: string // date-time
    /**
     * The applicant's preferred letting term (long/short/any)
     */
    term?: string
    /**
     * The lower bound of the applicant's budget
     */
    rentFrom?: number // double
    /**
     * The upper bound of the applicant's budget
     */
    rentTo?: number // double
    /**
     * The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually)
     */
    rentFrequency?: string
    /**
     * A list of property furnishing requirements taken from the full listing of the associated department. Only applicable to applicants with a marketingMode of renting
     */
    furnishing?: string[]
  }
  /**
   * The applicant's outdoor space requirements
   */
  externalArea?: {
    /**
     * The unit of area that each amount corresponds to (acres/hectares)
     */
    type?: string
    /**
     * The minimum unit value of outside space that the applicant is looking for
     */
    amountFrom?: number // double
    /**
     * The maximum unit value of outside space that the applicant is looking for
     */
    amountTo?: number // double
  }
  /**
   * The applicant's indoor space requirements
   */
  internalArea?: {
    /**
     * The unit of area that each amount corresponds to (squareFeet/squareMetres)
     */
    type?: string
    /**
     * The unit value of inside space that the applicant is looking for
     */
    amount?: number // double
  }
  /**
   * Gets the applicants source information
   */
  source?: {
    /**
     * Gets the unique identifier of the applicants source
     */
    id?: string
    /**
     * Gets the applicants source type
     */
    type?: string
    readonly _links?: {
      [name: string]: {
        href?: string
      }
    }
    readonly _embedded?: {
      [name: string]: any
    }
  }
  /**
   * A collection of office unique identifiers that are associated to the applicant. The first identifier listed is considered to be the primary office
   */
  officeIds?: string[]
  /**
   * A collection of negotiator unique identifiers that are associated to the applicant. The first identifier listed is considered to be the primary negotiator
   */
  negotiatorIds?: string[]
  /**
   * A collection of summarised contacts attached to the applicant. The first contact listed is considered to be the primary contact
   */
  related?: {
    /**
     * The unique identifier of the contact
     */
    id?: string
    /**
     * The name of the contact
     */
    name?: string
    /**
     * The type of the contact (company/contact)
     */
    type?: string
    /**
     * The home phone number of the contact
     */
    homePhone?: string
    /**
     * The work phone number of the contact
     */
    workPhone?: string
    /**
     * The mobile phone number of the contact
     */
    mobilePhone?: string
    /**
     * The email address of the contact
     */
    email?: string
    /**
     * The primary address of the contact
     */
    primaryAddress?: {
      /**
       * The building name
       */
      buildingName?: string
      /**
       * The building number
       */
      buildingNumber?: string
      /**
       * The first line of the address
       */
      line1?: string
      /**
       * The second line of the address
       */
      line2?: string
      /**
       * The third line of the address
       */
      line3?: string
      /**
       * The fourth line of the address
       */
      line4?: string
      /**
       * The postcode
       */
      postcode?: string
      /**
       * The ISO-3166 country code that the address resides within
       */
      countryId?: string
    }
    readonly _links?: {
      [name: string]: {
        href?: string
      }
    }
    readonly _embedded?: {
      [name: string]: any
    }
  }[]
  /**
   * A listing of app specific metadata that has been set against this applicant
   */
  metadata?: {
    [name: string]: any
  }
  readonly _links?: {
    [name: string]: {
      href?: string
    }
  }
  readonly _embedded?: {
    [name: string]: any
  }
}
/**
 * The details specific to applicants with a marketingMode of renting
 */
export interface ApplicantRentingModel {
  /**
   * The date the applicant is looking to move to a new property
   */
  moveDate?: string // date-time
  /**
   * The applicant's preferred letting term (long/short/any)
   */
  term?: string
  /**
   * The lower bound of the applicant's budget
   */
  rentFrom?: number // double
  /**
   * The upper bound of the applicant's budget
   */
  rentTo?: number // double
  /**
   * The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually)
   */
  rentFrequency?: string
  /**
   * A list of property furnishing requirements taken from the full listing of the associated department. Only applicable to applicants with a marketingMode of renting
   */
  furnishing?: string[]
}
/**
 * Model representing the details of a applicants source
 */
export interface ApplicantSourceModel {
  /**
   * Gets the unique identifier of the applicants source
   */
  id?: string
  /**
   * Gets the applicants source type
   */
  type?: string
  readonly _links?: {
    [name: string]: {
      href?: string
    }
  }
  readonly _embedded?: {
    [name: string]: any
  }
}
/**
 * Model representing a single contact detail (eg mobile telephone number)
 */
export interface AppointmentAttendeeCommunicationModel {
  /**
   * Gets the label representing the type of detail (eg E-mail)
   */
  label?: string
  /**
   * Gets the contact detail (eg the actual telephone number or email address)
   */
  detail?: string
}
/**
 * Model representing an appointment attendee
 */
export interface AppointmentAttendeeModel {
  /**
   * Gets the identifier of the attendee
   */
  id?: string
  /**
   * Gets the type of attendee
   */
  type?: string
  /**
   * Gets the contacts of this attendee
   */
  contacts?: {
    /**
     * Gets the identifier of the contact
     */
    id?: string
    /**
     * Gets the name of the contact
     */
    name?: string
    /**
     * Gets a collection of the contacts' contact details
     */
    communicationDetails?: {
      /**
       * Gets the label representing the type of detail (eg E-mail)
       */
      label?: string
      /**
       * Gets the contact detail (eg the actual telephone number or email address)
       */
      detail?: string
    }[]
  }[]
  readonly _links?: {
    [name: string]: {
      href?: string
    }
  }
  readonly _embedded?: {
    [name: string]: any
  }
}
export interface AppointmentContactModel {
  /**
   * Gets the identifier of the contact
   */
  id?: string
  /**
   * Gets the name of the contact
   */
  name?: string
  /**
   * Gets a collection of the contacts' contact details
   */
  communicationDetails?: {
    /**
     * Gets the label representing the type of detail (eg E-mail)
     */
    label?: string
    /**
     * Gets the contact detail (eg the actual telephone number or email address)
     */
    detail?: string
  }[]
}
/**
 * Model representing appointment follow up data
 */
export interface AppointmentFollowUpModel {
  /**
   * Gets the date that the appointment should be followed up on
   */
  due?: string // date-time
  /**
   * Gets the unique identifier of a pre-defined follow up response type
   */
  responseId?: string
  /**
   * Gets the internal follow up notes to be stored against the appointment
   */
  notes?: string
}
/**
 * Model representing a calendar appointment
 */
export interface AppointmentModel {
  /**
   * Gets the unique identifier
   */
  id?: string
  /**
   * Gets the datetime when the appointment was created
   */
  created?: string // date-time
  /**
   * Gets the date and time that the appointment was last modified
   */
  modified?: string // date-time
  /**
   * Gets the date and time that the appointment will start
   */
  start?: string // date-time
  /**
   * Gets the date and time that the appointment will end
   */
  end?: string // date-time
  /**
   * Gets the type of appointment
   */
  typeId?: string
  /**
   * Gets the appointment description
   */
  description?: string
  /**
   * Gets directions to the appointment location
   */
  directions?: string
  /**
   * Flag denoting whether or not the appointment recurs
   */
  recurring?: boolean
  /**
   * Flag denoting whether or not the appointment is cancelled
   */
  cancelled?: boolean
  /**
   * Gets the appointments follow up information
   */
  followUp?: {
    /**
     * Gets the date that the appointment should be followed up on
     */
    due?: string // date-time
    /**
     * Gets the unique identifier of a pre-defined follow up response type
     */
    responseId?: string
    /**
     * Gets the internal follow up notes to be stored against the appointment
     */
    notes?: string
  }
  /**
   * Gets the unique identifier of the property related to the appointment
   */
  propertyId?: string
  /**
   * Gets the id of the person that organised the appointment
   */
  organiserId?: string
  /**
   * Gets a collection of negotiators related to the appointment
   */
  negotiatorIds?: string[]
  /**
   * Gets a collection of offices related to the appointment
   */
  officeIds?: string[]
  /**
   * Gets a collection of attendees who are requested to attend the appointment
   */
  attendee?: {
    /**
     * Gets the identifier of the attendee
     */
    id?: string
    /**
     * Gets the type of attendee
     */
    type?: string
    /**
     * Gets the contacts of this attendee
     */
    contacts?: {
      /**
       * Gets the identifier of the contact
       */
      id?: string
      /**
       * Gets the name of the contact
       */
      name?: string
      /**
       * Gets a collection of the contacts' contact details
       */
      communicationDetails?: {
        /**
         * Gets the label representing the type of detail (eg E-mail)
         */
        label?: string
        /**
         * Gets the contact detail (eg the actual telephone number or email address)
         */
        detail?: string
      }[]
    }[]
    readonly _links?: {
      [name: string]: {
        href?: string
      }
    }
    readonly _embedded?: {
      [name: string]: any
    }
  }
  /**
   * Flag denoting whether or not the appointment is accompanied
   */
  accompanied?: boolean
  /**
   * Flag denoting whether or not the negotiator is confirmed
   */
  negotiatorConfirmed?: boolean
  /**
   * Flag denoting whether or not the attendee is confirmed
   */
  attendeeConfirmed?: boolean
  /**
   * Flag denoting whether or not the property is confirmed
   */
  propertyConfirmed?: boolean
  /**
   * Gets a listing of additional metadata that has been set against this appointment
   */
  metadata?: {
    [name: string]: any
  }
  readonly _links?: {
    [name: string]: {
      href?: string
    }
  }
  readonly _embedded?: {
    [name: string]: any
  }
}
export interface AreaModel {
  /**
   * Gets the unique identifier
   */
  id?: string
  /**
   * Gets the date and time that the contact was created
   */
  created?: string // date-time
  /**
   * Gets the date and time that the contact was last modified
   */
  modified?: string // date-time
  /**
   * Gets the areas name
   */
  name?: string
  /**
   * Gets the areas active flag
   */
  active?: boolean
  /**
   * Gets the areas type (postcodes/polygon/group)
   */
  type?: string
  /**
   * Gets the areas location details (Postcodes, Group names or Lat Longs)
   */
  area?: string[]
  /**
   * Gets the departments linked to this area
   */
  departmentIds?: string[]
  /**
   * Gets the offices linked to this area
   */
  officeIds?: string[]
  readonly _links?: {
    [name: string]: {
      href?: string
    }
  }
  readonly _embedded?: {
    [name: string]: any
  }
}
/**
 * Model representing the physical address of a building or premise
 */
export interface CompanyAddressModel {
  /**
   * Gets the building name
   */
  buildingName?: string
  /**
   * Gets the building number
   */
  buildingNumber?: string
  /**
   * Gets the first line of the address
   */
  line1?: string
  /**
   * Gets the second line of the address
   */
  line2?: string
  /**
   * Gets the third line of the address
   */
  line3?: string
  /**
   * Gets the fourth line of the address
   */
  line4?: string
  /**
   * Gets the postcode
   */
  postcode?: string
  /**
   * Gets the ISO-3166 country code associated with the address
   */
  country?: string
}
/**
 * Model representing the details of a company
 */
export interface CompanyModel {
  /**
   * Gets the unique identifier
   */
  id?: string
  /**
   * Gets the date and time that the company was created
   */
  created?: string // date-time
  /**
   * Gets the date and time that the company was last modified
   */
  modified?: string // date-time
  /**
   * Gets the name of the company
   */
  name?: string
  /**
   * Gets the branch of the company
   */
  branch?: string
  /**
   * Gets the notes stored against the company
   */
  notes?: string
  /**
   * Gets a flag to indicate if this company has been marked as active
   */
  active?: boolean
  /**
   * Gets a flag to indicate if this company is vat registered
   */
  vatRegistered?: boolean
  /**
   * Gets a list of type ids
   */
  typeIds?: string[]
  /**
   * Gets the supplier type id
   */
  supplierTypeId?: string
  /**
   * The work phone number of the company
   */
  workPhone?: string
  /**
   * The mobile phone number of the company
   */
  mobilePhone?: string
  /**
   * The email address of the company
   */
  email?: string
  /**
   * Gets the address for this company
   */
  address?: {
    /**
     * Gets the building name
     */
    buildingName?: string
    /**
     * Gets the building number
     */
    buildingNumber?: string
    /**
     * Gets the first line of the address
     */
    line1?: string
    /**
     * Gets the second line of the address
     */
    line2?: string
    /**
     * Gets the third line of the address
     */
    line3?: string
    /**
     * Gets the fourth line of the address
     */
    line4?: string
    /**
     * Gets the postcode
     */
    postcode?: string
    /**
     * Gets the ISO-3166 country code associated with the address
     */
    country?: string
  }
  /**
   * Gets the collection of office ids that are related to this company
   */
  officeIds?: string[]
  /**
   * Gets the collection of negotiator ids that are related to this company
   */
  negotiatorIds?: string[]
  /**
   * Gets a listing of additional metadata that has been set against this company
   */
  metadata?: {
    [name: string]: any
  }
  readonly _links?: {
    [name: string]: {
      href?: string
    }
  }
  readonly _embedded?: {
    [name: string]: any
  }
}
/**
 * Model representing the physical address of a building or premise
 */
export interface ContactAddressModel {
  /**
   * Gets the type of address (primary/secondary/home/work/forwarding/company/previous)
   */
  type?: string
  /**
   * Gets the building name
   */
  buildingName?: string
  /**
   * Gets the building number
   */
  buildingNumber?: string
  /**
   * Gets the first line of the address
   */
  line1?: string
  /**
   * Gets the second line of the address
   */
  line2?: string
  /**
   * Gets the third line of the address
   */
  line3?: string
  /**
   * Gets the fourth line of the address
   */
  line4?: string
  /**
   * Gets the postcode
   */
  postcode?: string
  /**
   * Gets the ISO-3166 country code associated with the address
   */
  countryId?: string
}
/**
 * Model representing the details of a person
 */
export interface ContactModel {
  /**
   * Gets the unique identifier
   */
  id?: string
  /**
   * Gets the date and time that the contact was created
   */
  created?: string // date-time
  /**
   * Gets the date and time that the contact was last modified
   */
  modified?: string // date-time
  /**
   * Gets the title of this contact (eg. Mr, Mrs, Miss, Dr)
   */
  title?: string
  /**
   * Gets the forename of this contact
   */
  forename?: string
  /**
   * Gets the surname of this contact
   */
  surname?: string
  /**
   * Gets the date of birth of this contact
   */
  dateOfBirth?: string // date-time
  /**
   * Gets a flag to indicate if this contact has been marked as active
   */
  active?: boolean
  /**
   * Gets the marketing consent status of this contact (grant/deny/notAsked)
   */
  marketingConsent?: string
  /**
   * Gets the contacts source information
   */
  source?: {
    /**
     * Gets the unique identifier of the contacts source
     */
    id?: string
    /**
     * Gets the contacts source type
     */
    type?: string
    readonly _links?: {
      [name: string]: {
        href?: string
      }
    }
    readonly _embedded?: {
      [name: string]: any
    }
  }
  /**
   * The home phone number of the contact
   */
  homePhone?: string
  /**
   * The work phone number of the contact
   */
  workPhone?: string
  /**
   * The mobile phone number of the contact
   */
  mobilePhone?: string
  /**
   * The email address of the contact
   */
  email?: string
  /**
   * Gets the contacts primary address
   */
  primaryAddress?: {
    /**
     * Gets the type of address (primary/secondary/home/work/forwarding/company/previous)
     */
    type?: string
    /**
     * Gets the building name
     */
    buildingName?: string
    /**
     * Gets the building number
     */
    buildingNumber?: string
    /**
     * Gets the first line of the address
     */
    line1?: string
    /**
     * Gets the second line of the address
     */
    line2?: string
    /**
     * Gets the third line of the address
     */
    line3?: string
    /**
     * Gets the fourth line of the address
     */
    line4?: string
    /**
     * Gets the postcode
     */
    postcode?: string
    /**
     * Gets the ISO-3166 country code associated with the address
     */
    countryId?: string
  }
  /**
   * Gets the contacts secondary address
   */
  secondaryAddress?: {
    /**
     * Gets the type of address (primary/secondary/home/work/forwarding/company/previous)
     */
    type?: string
    /**
     * Gets the building name
     */
    buildingName?: string
    /**
     * Gets the building number
     */
    buildingNumber?: string
    /**
     * Gets the first line of the address
     */
    line1?: string
    /**
     * Gets the second line of the address
     */
    line2?: string
    /**
     * Gets the third line of the address
     */
    line3?: string
    /**
     * Gets the fourth line of the address
     */
    line4?: string
    /**
     * Gets the postcode
     */
    postcode?: string
    /**
     * Gets the ISO-3166 country code associated with the address
     */
    countryId?: string
  }
  /**
   * Gets the contacts work address
   */
  workAddress?: {
    /**
     * Gets the type of address (primary/secondary/home/work/forwarding/company/previous)
     */
    type?: string
    /**
     * Gets the building name
     */
    buildingName?: string
    /**
     * Gets the building number
     */
    buildingNumber?: string
    /**
     * Gets the first line of the address
     */
    line1?: string
    /**
     * Gets the second line of the address
     */
    line2?: string
    /**
     * Gets the third line of the address
     */
    line3?: string
    /**
     * Gets the fourth line of the address
     */
    line4?: string
    /**
     * Gets the postcode
     */
    postcode?: string
    /**
     * Gets the ISO-3166 country code associated with the address
     */
    countryId?: string
  }
  /**
   * Gets a collection of office ids that are related to this contact
   */
  officeIds?: string[]
  /**
   * Gets a collection of negotiator ids that are related to this contact
   */
  negotiatorIds?: string[]
  /**
   * Gets a listing of additional metadata that has been set against this contact
   */
  metadata?: {
    [name: string]: any
  }
  readonly _links?: {
    [name: string]: {
      href?: string
    }
  }
  readonly _embedded?: {
    [name: string]: any
  }
}
/**
 * Model representing the details of a contacts source
 */
export interface ContactSourceModel {
  /**
   * Gets the unique identifier of the contacts source
   */
  id?: string
  /**
   * Gets the contacts source type
   */
  type?: string
  readonly _links?: {
    [name: string]: {
      href?: string
    }
  }
  readonly _embedded?: {
    [name: string]: any
  }
}
/**
 * The details specific to applicants with a marketingMode of buying
 */
export interface CreateApplicantBuyingModel {
  /**
   * The lower bound of the applicant's budget
   */
  priceFrom?: number // int32
  /**
   * The upper bound of the applicant's budget
   */
  priceTo?: number // int32
}
/**
 * A relationship between the applicant and a contact
 */
export interface CreateApplicantContactRelationshipModel {
  /**
   * The unique identifier of the contact to create a relationship with
   */
  associatedId?: string
  /**
   * The type of relationship to create (contact/company)
   */
  associatedType?: string
}
/**
 * The applicant's outdoor space requirements
 */
export interface CreateApplicantExternalAreaModel {
  /**
   * The unit of area that each amount corresponds to (acres/hectares)
   */
  type?: string
  /**
   * The minimum unit value of outside space that the applicant is looking for
   */
  amountFrom?: number // double
  /**
   * The maximum unit value of outside space that the applicant is looking for
   */
  amountTo?: number // double
}
/**
 * The applicant's indoor space requirements
 */
export interface CreateApplicantInternalAreaModel {
  /**
   * The unit of area that each amount corresponds to (squareFeet/squareMetres)
   */
  type?: string
  /**
   * The unit value of inside space that the applicant is looking for
   */
  amount?: number // double
}
/**
 * Representation of an applicant
 */
export interface CreateApplicantModel {
  /**
   * Sets the marketing mode relating to the buyer (buying / renting)
   */
  marketingMode?: string
  /**
   * Sets a flag determining whether or not the applicant is actively looking for property
   */
  active?: boolean
  /**
   * Gets the applicant requirement notes
   */
  notes?: string
  /**
   * Sets the date and time that the applicant was last contacted
   */
  lastCall?: string // date-time
  /**
   * Sets the date and time that the applicant is next due to be contacted
   */
  nextCall?: string // date-time
  /**
   * Sets the id of the department that the applicant requirements are associated with
   */
  departmentId?: string
  /**
   * Sets the unique idenfitier of the applicants solicitor
   */
  solicitorId?: string
  /**
   * Sets the property type requirements
   */
  type?: string[]
  /**
   * Sets the property style requirements
   */
  style?: string[]
  /**
   * Sets the property situation requirements
   */
  situation?: string[]
  /**
   * Sets the property parking requirements
   */
  parking?: string[]
  /**
   * Sets the property age requirements
   */
  age?: string[]
  /**
   * Sets the property locality requirements
   */
  locality?: string[]
  /**
   * Sets the minimum number of bedrooms the applicant requires
   */
  bedroomsMin?: number // int32
  /**
   * Sets the maximum number of bedrooms the applicant requires
   */
  bedroomsMax?: number // int32
  /**
   * Sets the minimum number of reception rooms the applicant requires
   */
  receptionsMin?: number // int32
  /**
   * Sets the maximum number of reception rooms the applicant requires
   */
  receptionsMax?: number // int32
  /**
   * Sets the minimum number of bathrooms the applicant requires
   */
  bathroomsMin?: number // int32
  /**
   * Sets the maximum number of bathrooms the applicant requires
   */
  bathroomsMax?: number // int32
  /**
   * Sets the applicants location type (areas/addresses/none)
   */
  locationType?: string
  /**
   * Sets the applicants location options
   */
  locationOptions?: string[]
  /**
   * Sets the sales specific requirements, if the applicant is looking to buy
   */
  selling?: {
    /**
     * The lower bound of the applicant's budget
     */
    priceFrom?: number // int32
    /**
     * The upper bound of the applicant's budget
     */
    priceTo?: number // int32
  }
  /**
   * Sets the letting specific requirements, if the applicant is looking to rent
   */
  letting?: {
    /**
     * The date the applicant is looking to move to a new property
     */
    moveDate?: string // date-time
    /**
     * The applicant's preferred letting term (long/short/any)
     */
    term?: string
    /**
     * The lower bound of the applicant's budget
     */
    rentFrom?: number // double
    /**
     * The upper bound of the applicant's budget
     */
    rentTo?: number // double
    /**
     * The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually)
     */
    rentFrequency?: string
    /**
     * Sets the applicants furnishing requirements
     */
    furnishing?: string[]
  }
  /**
   * Sets the applicant's external area requirements
   */
  externalArea?: {
    /**
     * The unit of area that each amount corresponds to (acres/hectares)
     */
    type?: string
    /**
     * The minimum unit value of outside space that the applicant is looking for
     */
    amountFrom?: number // double
    /**
     * The maximum unit value of outside space that the applicant is looking for
     */
    amountTo?: number // double
  }
  /**
   * Sets the applicant's internal area requirements
   */
  internalArea?: {
    /**
     * The unit of area that each amount corresponds to (squareFeet/squareMetres)
     */
    type?: string
    /**
     * The unit value of inside space that the applicant is looking for
     */
    amount?: number // double
  }
  /**
   * Sets the applicants source
   */
  source?: {
    /**
     * Sets the unique identifier of the applicants source
     */
    id?: string
    /**
     * Sets the applicants source type
     */
    type?: string
  }
  /**
   * Sets a collection of office ids that are related to this applicant
   */
  officeIds?: string[]
  /**
   * Sets a collection of negotiator ids that are related to this applicant
   */
  negotiatorIds?: string[]
  /**
   * Sets the collection of new or existing contact entities that
   * should be attached to the new applicant
   */
  related?: {
    /**
     * The unique identifier of the contact to create a relationship with
     */
    associatedId?: string
    /**
     * The type of relationship to create (contact/company)
     */
    associatedType?: string
  }[]
  /**
   * Sets a JSON fragment to attach to this applicant as metadata
   */
  metadata?: {
    [name: string]: any
  }
}
/**
 * The details specific to applicants with a marketingMode of renting
 */
export interface CreateApplicantRentingModel {
  /**
   * The date the applicant is looking to move to a new property
   */
  moveDate?: string // date-time
  /**
   * The applicant's preferred letting term (long/short/any)
   */
  term?: string
  /**
   * The lower bound of the applicant's budget
   */
  rentFrom?: number // double
  /**
   * The upper bound of the applicant's budget
   */
  rentTo?: number // double
  /**
   * The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually)
   */
  rentFrequency?: string
  /**
   * Sets the applicants furnishing requirements
   */
  furnishing?: string[]
}
/**
 * Model used for creating a applicants source
 */
export interface CreateApplicantSourceModel {
  /**
   * Sets the unique identifier of the applicants source
   */
  id?: string
  /**
   * Sets the applicants source type
   */
  type?: string
}
/**
 * Model to associate an attendee to a new appointment
 */
export interface CreateAppointmentAttendeeModel {
  /**
   * Sets the identifier of the attendee
   */
  id?: string
  /**
   * Sets the type of attendee
   */
  type?: string
}
/**
 * Model required to create a calendar entry
 */
export interface CreateAppointmentModel {
  /**
   * Sets the date and time that the appointment will start
   */
  start?: string // date-time
  /**
   * Sets the date and time that the appointment will end
   */
  end?: string // date-time
  /**
   * Sets the date that the appointment should be followed up on
   */
  followUpOn?: string // date-time
  /**
   * Sets the type of appointment
   */
  typeId?: string
  /**
   * Sets the appointment description
   */
  description?: string
  /**
   * Sets the id of the person that organised the appointment
   */
  organiserId?: string
  /**
   * Sets the negotiator ids to link the appointment too.
   */
  negotiatorIds?: string[]
  /**
   * Sets the office ids to link the appointment too.
   */
  officeIds?: string[]
  /**
   * Sets the details of the attendee of the appointment
   */
  attendee?: {
    /**
     * Sets the identifier of the attendee
     */
    id?: string
    /**
     * Sets the type of attendee
     */
    type?: string
  }
  /**
   * Sets the property identifier that the appointment takes place at
   */
  propertyId?: string
  /**
   * Sets the flag to specify if the appointment is accompanied.
   */
  accompanied?: boolean
  /**
   * Sets the flag to specify if the negotiator is confirmed.
   */
  negotiatorConfirmed?: boolean
  /**
   * Sets the flag to specify if the attendee is confirmed.
   */
  attendeeConfirmed?: boolean
  /**
   * Sets the flag to specify if the property is confirmed.
   */
  propertyConfirmed?: boolean
  /**
   * Sets the recurrence pattern for this appointment
   */
  recurrence?: {
    /**
     * Sets the numeric value for often this appointment will recur
     */
    interval?: number // int32
    /**
     * Sets the type of unit that the interval will apply to
     */
    type?: string
    /**
     * Sets the date this appointment will continue to recur until
     */
    until?: string // date-time
  }
  /**
   * Sets a JSON fragment to attach to this appointment as metadata
   */
  metadata?: {
    [name: string]: any
  }
}
/**
 * Model to set the recurrence details of a new appointment
 */
export interface CreateAppointmentRecurrenceModel {
  /**
   * Sets the numeric value for often this appointment will recur
   */
  interval?: number // int32
  /**
   * Sets the type of unit that the interval will apply to
   */
  type?: string
  /**
   * Sets the date this appointment will continue to recur until
   */
  until?: string // date-time
}
export interface CreateAreaModel {
  /**
   * Sets the areas name
   */
  name?: string
  /**
   * Sets the areas type
   */
  type?: string
  /**
   * Sets the areas area information
   */
  area?: string[]
  /**
   * Sets the areas related deparments
   */
  departmentIds?: string[]
  /**
   * Sets the areas related offices
   */
  officeIds?: string[]
  /**
   * Sets the areas parent id
   */
  parentId?: string
}
/**
 * Model to create a company address
 */
export interface CreateCompanyAddressModel {
  /**
   * Sets the type of address (primary/secondary/home/work/forwarding/company/previous)
   */
  type?: string
  /**
   * Sets the building name
   */
  buildingName?: string
  /**
   * Sets the building number
   */
  buildingNumber?: string
  /**
   * Sets the first line of the address
   */
  line1?: string
  /**
   * Sets the second line of the address
   */
  line2?: string
  /**
   * Sets the third line of the address
   */
  line3?: string
  /**
   * Sets the fourth line of the address
   */
  line4?: string
  /**
   * Sets the postcode
   */
  postcode?: string
  /**
   * Sets the ISO-3166 country code associated with the address
   */
  countryId?: string
}
/**
 * Model to create a company
 */
export interface CreateCompanyModel {
  /**
   * Sets the companies name
   */
  name?: string
  /**
   * Sets the companies branch
   */
  branch?: string
  /**
   * Sets the companies notes
   */
  notes?: string
  /**
   * Sets the active flag against the company
   */
  active?: boolean
  /**
   * Sets the vat registered flag against the company
   */
  vatRegistered?: boolean
  /**
   * Sets the companies list of type ids
   */
  typeIds?: string[]
  /**
   * Sets the supplier type id
   */
  supplierTypeId?: string
  /**
   * The work phone number of the company
   */
  workPhone?: string
  /**
   * The mobile phone number of the company
   */
  mobilePhone?: string
  /**
   * The email address of the company
   */
  email?: string
  /**
   * Sets the address of the company
   */
  address?: {
    /**
     * Sets the type of address (primary/secondary/home/work/forwarding/company/previous)
     */
    type?: string
    /**
     * Sets the building name
     */
    buildingName?: string
    /**
     * Sets the building number
     */
    buildingNumber?: string
    /**
     * Sets the first line of the address
     */
    line1?: string
    /**
     * Sets the second line of the address
     */
    line2?: string
    /**
     * Sets the third line of the address
     */
    line3?: string
    /**
     * Sets the fourth line of the address
     */
    line4?: string
    /**
     * Sets the postcode
     */
    postcode?: string
    /**
     * Sets the ISO-3166 country code associated with the address
     */
    countryId?: string
  }
  /**
   * Sets a collection of office ids that are related to this company
   */
  officeIds?: string[]
  /**
   * Sets a collection of negotiator ids that are related to this company
   */
  negotiatorIds?: string[]
  /**
   * Sets a JSON fragment to attach to this company as metadata
   */
  metadata?: {
    [name: string]: any
  }
}
/**
 * Model to create a contact address
 */
export interface CreateContactAddressModel {
  /**
   * Sets the type of address (primary/secondary/home/work/forwarding/company/previous)
   */
  type?: string
  /**
   * Sets the building name
   */
  buildingName?: string
  /**
   * Sets the building number
   */
  buildingNumber?: string
  /**
   * Sets the first line of the address
   */
  line1?: string
  /**
   * Sets the second line of the address
   */
  line2?: string
  /**
   * Sets the third line of the address
   */
  line3?: string
  /**
   * Sets the fourth line of the address
   */
  line4?: string
  /**
   * Sets the postcode
   */
  postcode?: string
  /**
   * Sets the ISO-3166 country code associated with the address
   */
  countryId?: string
}
/**
 * Model to create a new contact record
 */
export interface CreateContactModel {
  /**
   * Sets the title of this contact (eg. Mr, Mrs, Miss, Dr)
   */
  title?: string
  /**
   * Sets the forename of this contact
   */
  forename?: string
  /**
   * Sets the surname of this contact
   */
  surname?: string
  /**
   * Sets the date of birth of this contact
   */
  dateOfBirth?: string // date-time
  /**
   * Sets a flag to indicate if this contact has been marked as active (default true)
   */
  active?: boolean
  /**
   * Sets the marketing consent status of this contact (grant/deny/notAsked)
   */
  marketingConsent?: string
  /**
   * Sets the contacts source
   */
  source?: {
    /**
     * Sets the unique identifier of the contacts source
     */
    id?: string
    /**
     * Sets the contacts source type
     */
    type?: string
  }
  /**
   * The home phone number of the contact
   */
  homePhone?: string
  /**
   * The work phone number of the contact
   */
  workPhone?: string
  /**
   * The mobile phone number of the contact
   */
  mobilePhone?: string
  /**
   * The email address of the contact
   */
  email?: string
  /**
   * Sets a collection of office ids that are related to this contact
   */
  officeIds?: string[]
  /**
   * Sets a collection of negotiator ids that are related to this contact
   */
  negotiatorIds?: string[]
  /**
   * Sets the contacts primary address
   */
  primaryAddress?: {
    /**
     * Sets the type of address (primary/secondary/home/work/forwarding/company/previous)
     */
    type?: string
    /**
     * Sets the building name
     */
    buildingName?: string
    /**
     * Sets the building number
     */
    buildingNumber?: string
    /**
     * Sets the first line of the address
     */
    line1?: string
    /**
     * Sets the second line of the address
     */
    line2?: string
    /**
     * Sets the third line of the address
     */
    line3?: string
    /**
     * Sets the fourth line of the address
     */
    line4?: string
    /**
     * Sets the postcode
     */
    postcode?: string
    /**
     * Sets the ISO-3166 country code associated with the address
     */
    countryId?: string
  }
  /**
   * Sets the contacts secondary address
   */
  secondaryAddress?: {
    /**
     * Sets the type of address (primary/secondary/home/work/forwarding/company/previous)
     */
    type?: string
    /**
     * Sets the building name
     */
    buildingName?: string
    /**
     * Sets the building number
     */
    buildingNumber?: string
    /**
     * Sets the first line of the address
     */
    line1?: string
    /**
     * Sets the second line of the address
     */
    line2?: string
    /**
     * Sets the third line of the address
     */
    line3?: string
    /**
     * Sets the fourth line of the address
     */
    line4?: string
    /**
     * Sets the postcode
     */
    postcode?: string
    /**
     * Sets the ISO-3166 country code associated with the address
     */
    countryId?: string
  }
  /**
   * Sets the contacts work address
   */
  workAddress?: {
    /**
     * Sets the type of address (primary/secondary/home/work/forwarding/company/previous)
     */
    type?: string
    /**
     * Sets the building name
     */
    buildingName?: string
    /**
     * Sets the building number
     */
    buildingNumber?: string
    /**
     * Sets the first line of the address
     */
    line1?: string
    /**
     * Sets the second line of the address
     */
    line2?: string
    /**
     * Sets the third line of the address
     */
    line3?: string
    /**
     * Sets the fourth line of the address
     */
    line4?: string
    /**
     * Sets the postcode
     */
    postcode?: string
    /**
     * Sets the ISO-3166 country code associated with the address
     */
    countryId?: string
  }
  /**
   * Sets a JSON fragment to attach to this contact as metadata
   */
  metadata?: {
    [name: string]: any
  }
}
/**
 * Model used for creating a contacts source
 */
export interface CreateContactSourceModel {
  /**
   * Sets the unique identifier of the contacts source
   */
  id?: string
  /**
   * Sets the contacts source type
   */
  type?: string
}
/**
 * Model used for creating a new document
 */
export interface CreateDocumentModel {
  /**
   * Sets the type of entity that this document is associated with
   */
  associatedType?: string
  /**
   * Sets the Id of the entity that this document is associated with
   */
  associatedId?: string
  /**
   * Sets the Id of the document type
   */
  typeId?: string
  /**
   * Sets the filename assigned to the document
   */
  name?: string
  /**
   * Sets the base64 binary content of the file
   */
  fileData?: string
}
/**
 * Model to create an identity check
 */
export interface CreateIdentityCheckModel {
  /**
   * Sets the id of the contact to create the identity check against
   */
  contactId?: string
  /**
   * Sets the date that the identity check was performed
   * Note that this can be different to the date that the check was created
   */
  checkDate?: string // date-time
  /**
   * Sets the status of this identity check  (pass/fail/pending/cancelled/warnings/unchecked)
   */
  status?: string
  /**
   * Sets the id of the negotiator that performed the identity check
   * Note that this can be different to the negotiator that created the check
   */
  negotiatorId?: string
  /**
   * Sets the details of document one that have been provided for this identity check
   */
  document1?: {
    /**
     * Sets the id of the document type that describes this document
     */
    typeId?: string
    /**
     * Sets the date that this document expires
     */
    expiry?: string // date-time
    /**
     * Sets the textual details of the identity document (eg. passport number)
     */
    details?: string
  }
  /**
   * Sets the details of document two that have been provided for this identity check
   */
  document2?: {
    /**
     * Sets the id of the document type that describes this document
     */
    typeId?: string
    /**
     * Sets the date that this document expires
     */
    expiry?: string // date-time
    /**
     * Sets the textual details of the identity document (eg. passport number)
     */
    details?: string
  }
  /**
   * Sets a JSON fragment to attach to this identity check as metadata
   */
  metadata?: {
    [name: string]: any
  }
}
/**
 * Model to create an identity check document
 */
export interface CreateIdentityDocumentModel {
  /**
   * Sets the id of the document type that describes this document
   */
  typeId?: string
  /**
   * Sets the date that this document expires
   */
  expiry?: string // date-time
  /**
   * Sets the textual details of the identity document (eg. passport number)
   */
  details?: string
}
/**
 * A model used to create a new relationship between a landlord and an existing contact
 */
export interface CreateLandlordContactRelationshipModel {
  /**
   * Sets the entity id to create a relationship with. (Contact or Company)
   */
  associatedId?: string
  /**
   * Sets the entity type to create a relationship with. (Contact or Company)
   */
  associatedType?: string
}
/**
 * Request body to create a landlord
 */
export interface CreateLandlordModel {
  /**
   * Sets the active flag against this landlord
   */
  active?: boolean
  /**
   * Sets the unique idenfitier of the landlords solicitor
   */
  solicitorId?: string
  /**
   * Sets the office id that is associated to this landlord
   */
  officeId?: string
  /**
   * Sets the landlords source
   */
  source?: {
    /**
     * Sets the unique identifier of the landlords source
     */
    id?: string
    /**
     * Sets the landlords source type
     */
    type?: string
  }
  /**
   * Sets the collection of new or existing contact entities the
   * should be attached to the new landlord
   */
  related?: {
    /**
     * Sets the entity id to create a relationship with. (Contact or Company)
     */
    associatedId?: string
    /**
     * Sets the entity type to create a relationship with. (Contact or Company)
     */
    associatedType?: string
  }[]
  /**
   * Sets a JSON fragment to attach to this landlord as metadata
   */
  metadata?: {
    [name: string]: any
  }
}
/**
 * Model used for creating a landlords source
 */
export interface CreateLandlordSourceModel {
  /**
   * Sets the unique identifier of the landlords source
   */
  id?: string
  /**
   * Sets the landlords source type
   */
  type?: string
}
/**
 * Model to create an negotiator
 */
export interface CreateNegotiatorModel {
  /**
   * Sets the unique identifier of the negotiator
   */
  id?: string
  /**
   * Sets the unique identifier of the office related to the negotiator
   */
  officeId?: string
  /**
   * Sets the name of the negotiator
   */
  name?: string
  /**
   * Sets the job title of the negotiator
   */
  jobTitle?: string
  /**
   * Sets the active flag for a negotiator
   */
  active?: boolean
  /**
   * The work phone number of the negotiator
   */
  workPhone?: string
  /**
   * The mobile phone number of the negotiator
   */
  mobilePhone?: string
  /**
   * The email address of the negotiator
   */
  email?: string
  /**
   * Sets a JSON fragment to attach to this negotiator as metadata
   */
  metadata?: {
    [name: string]: any
  }
}
/**
 * Model to create an offer
 */
export interface CreateOfferModel {
  /**
   * Sets the id of the applicant associated to the offer
   */
  applicantId?: string
  /**
   * Sets the id of the property associated to the offer
   */
  propertyId?: string
  /**
   * Sets the id of the negotiator associated to the offer
   */
  negotiatorId?: string
  /**
   * Sets the date the offer was made
   */
  date?: string // date-time
  /**
   * Sets the amount the offer was for
   */
  amount?: number // double
  /**
   * Sets the status of the offer
   */
  status?: string
  /**
   * Sets the requested inclusions of the offer
   */
  inclusions?: string
  /**
   * Sets the requested exclusions of the offer
   */
  exclusions?: string
  /**
   * Sets the conditions of the offer
   */
  conditions?: string
  /**
   * Sets a JSON fragment to attach to this offer as metadata
   */
  metadata?: {
    [name: string]: any
  }
}
/**
 * Model to create an office address
 */
export interface CreateOfficeAddressModel {
  /**
   * Sets the type of address (primary/secondary/home/work/forwarding/company/previous)
   */
  type?: string
  /**
   * Sets the building name
   */
  buildingName?: string
  /**
   * Sets the building number
   */
  buildingNumber?: string
  /**
   * Sets the first line of the address
   */
  line1?: string
  /**
   * Sets the second line of the address
   */
  line2?: string
  /**
   * Sets the third line of the address
   */
  line3?: string
  /**
   * Sets the fourth line of the address
   */
  line4?: string
  /**
   * Sets the postcode
   */
  postcode?: string
  /**
   * Sets the ISO-3166 country code associated with the address
   */
  countryId?: string
}
/**
 * Model to create an office
 */
export interface CreateOfficeModel {
  /**
   * Sets the unique identifier of the office
   */
  id?: string
  /**
   * Sets the name of the office
   */
  name?: string
  /**
   * Sets the manager of the office
   */
  manager?: string
  /**
   * Sets the address of the office
   */
  address?: {
    /**
     * Sets the type of address (primary/secondary/home/work/forwarding/company/previous)
     */
    type?: string
    /**
     * Sets the building name
     */
    buildingName?: string
    /**
     * Sets the building number
     */
    buildingNumber?: string
    /**
     * Sets the first line of the address
     */
    line1?: string
    /**
     * Sets the second line of the address
     */
    line2?: string
    /**
     * Sets the third line of the address
     */
    line3?: string
    /**
     * Sets the fourth line of the address
     */
    line4?: string
    /**
     * Sets the postcode
     */
    postcode?: string
    /**
     * Sets the ISO-3166 country code associated with the address
     */
    countryId?: string
  }
  /**
   * The work phone number of the office
   */
  workPhone?: string
  /**
   * The email address of the office
   */
  email?: string
  /**
   * Sets a JSON fragment to attach to this office as metadata
   */
  metadata?: {
    [name: string]: any
  }
}
export interface CreatePropertyAddressModel {
  /**
   * Sets the building name
   */
  buildingName?: string
  /**
   * Sets the building number
   */
  buildingNumber?: string
  /**
   * Sets the first line of the address
   */
  line1?: string
  /**
   * Sets the second line of the address
   */
  line2?: string
  /**
   * Sets the third line of the address
   */
  line3?: string
  /**
   * Sets the fourth line of the address
   */
  line4?: string
  /**
   * Sets the postcode
   */
  postcode?: string
  /**
   * Sets the ISO-3166 country code associated with the address
   */
  countryId?: string
  /**
   * Sets the geolocation of the address
   */
  geolocation?: {
    /**
     * Sets the latitude coordinate of the coordinate pair
     */
    latitude?: number // double
    /**
     * Sets the longitude coordinate of the coordinate pair
     */
    longitude?: number // double
  }
}
export interface CreatePropertyEpcModel {
  /**
   * Sets whether this property is exempt from requiring an EPC
   */
  exempt?: boolean
  /**
   * Sets the current energy efficienty rating
   */
  eer?: number // int32
  /**
   * Sets the potential energy efficienty rating
   */
  eerPotential?: number // int32
  /**
   * Sets the current environmental impact rating
   */
  eir?: number // int32
  /**
   * Sets the potential environmental impact rating
   */
  eirPotential?: number // int32
}
export interface CreatePropertyExternalAreaModel {
  /**
   * Sets the unit of area (acres/hectares)
   */
  type?: string
  /**
   * Sets the minimum area bound
   */
  min?: number // double
  /**
   * Sets the maximum area bound
   */
  max?: number // double
}
export interface CreatePropertyGeolocationModel {
  /**
   * Sets the latitude coordinate of the coordinate pair
   */
  latitude?: number // double
  /**
   * Sets the longitude coordinate of the coordinate pair
   */
  longitude?: number // double
}
/**
 * Outward facing model for the creation of a property image
 */
export interface CreatePropertyImageModel {
  /**
   * Sets the base64 binary content of the file
   */
  data?: string
  /**
   * Sets the id of the property the image is linked to
   */
  propertyId?: string
  /**
   * Sets the images caption
   */
  caption?: string
  /**
   * Sets the images type
   */
  type?: string
}
export interface CreatePropertyInternalAreaModel {
  /**
   * Sets the unit of area (squareFeet/squareMetres)
   */
  type?: string
  /**
   * Sets the minimum area bound
   */
  min?: number // double
  /**
   * Sets the maximum area bound
   */
  max?: number // double
}
export interface CreatePropertyLettingModel {
  /**
   * Sets the date that the property was flagged as for let
   */
  instructed?: string // date-time
  /**
   * Sets the date this property is next available from
   */
  availableFrom?: string // date-time
  /**
   * Sets the date this property is available to
   */
  availableTo?: string // date-time
  /**
   * Sets the monetary amount required to rent this property
   */
  rent?: number // double
  /**
   * Sets the rent collection frequency (weekly/monthly/yearly)
   */
  rentFrequency?: string
  /**
   * Sets the acceptable letting terms (short/long/any)
   */
  term?: string
  /**
   * Sets the letting status of this property (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn)
   */
  status?: string
}
/**
 * A model used to create a new property
 */
export interface CreatePropertyModel {
  /**
   * Sets the marketing mode of the property (selling/letting/sellingAndLetting)
   */
  marketingMode?: string
  /**
   * Sets the department id which defines a specific property's acceptable values for type, style, situation, parking, age and locality
   */
  departmentId?: string
  /**
   * Sets the strapline description
   */
  strapline?: string
  /**
   * Sets the brief description
   */
  description?: string
  /**
   * Sets the summary of accommodation
   */
  summary?: string
  /**
   * Sets the address of the property
   */
  address?: {
    /**
     * Sets the building name
     */
    buildingName?: string
    /**
     * Sets the building number
     */
    buildingNumber?: string
    /**
     * Sets the first line of the address
     */
    line1?: string
    /**
     * Sets the second line of the address
     */
    line2?: string
    /**
     * Sets the third line of the address
     */
    line3?: string
    /**
     * Sets the fourth line of the address
     */
    line4?: string
    /**
     * Sets the postcode
     */
    postcode?: string
    /**
     * Sets the ISO-3166 country code associated with the address
     */
    countryId?: string
    /**
     * Sets the geolocation of the address
     */
    geolocation?: {
      /**
       * Sets the latitude coordinate of the coordinate pair
       */
      latitude?: number // double
      /**
       * Sets the longitude coordinate of the coordinate pair
       */
      longitude?: number // double
    }
  }
  /**
   * Sets the number of bedrooms
   */
  bedrooms?: number // int32
  /**
   * Sets the number of reception rooms
   */
  receptions?: number // int32
  /**
   * Sets the number of bathrooms
   */
  bathrooms?: number // int32
  /**
   * Sets the council tax banding (A/B/C/D/E/F/G/H)
   */
  councilTax?: string
  /**
   * Sets a value indicating whether this property can be advertised on the internet
   */
  internetAdvertising?: boolean
  /**
   * The arrangements regarding viewing the property
   */
  viewingArrangements?: string
  /**
   * Sets details of the EPC statistics
   */
  epc?: {
    /**
     * Sets whether this property is exempt from requiring an EPC
     */
    exempt?: boolean
    /**
     * Sets the current energy efficienty rating
     */
    eer?: number // int32
    /**
     * Sets the potential energy efficienty rating
     */
    eerPotential?: number // int32
    /**
     * Sets the current environmental impact rating
     */
    eir?: number // int32
    /**
     * Sets the potential environmental impact rating
     */
    eirPotential?: number // int32
  }
  /**
   * Sets the external area
   */
  externalArea?: {
    /**
     * Sets the unit of area (acres/hectares)
     */
    type?: string
    /**
     * Sets the minimum area bound
     */
    min?: number // double
    /**
     * Sets the maximum area bound
     */
    max?: number // double
  }
  /**
   * Sets details of the internal dimensions of the property
   */
  internalArea?: {
    /**
     * Sets the unit of area (squareFeet/squareMetres)
     */
    type?: string
    /**
     * Sets the minimum area bound
     */
    min?: number // double
    /**
     * Sets the maximum area bound
     */
    max?: number // double
  }
  /**
   * Sets the sales specific details of the property
   */
  selling?: {
    /**
     * Sets the date that the property was flagged as for sale
     */
    instructed?: string // date-time
    /**
     * Sets the asking price of the property
     */
    price?: number // int32
    /**
     * Sets the price qualifier (askingPrice/priceOnApplication/guidePrice/offersInRegion/offersOver/offersInExcess/fixedPrice/priceReducedTo)
     */
    qualifier?: string
    /**
     * Sets the sales status (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn)
     */
    status?: string
    /**
     * Sets details of the sales tenure of the property
     */
    tenure?: {
      /**
       * Sets the type of tenure that applies to this property
       */
      type?: string
      /**
       * Sets tenure expiration date
       */
      expiry?: string // date-time
    }
  }
  /**
   * Sets the letting specific details of the property
   */
  letting?: {
    /**
     * Sets the date that the property was flagged as for let
     */
    instructed?: string // date-time
    /**
     * Sets the date this property is next available from
     */
    availableFrom?: string // date-time
    /**
     * Sets the date this property is available to
     */
    availableTo?: string // date-time
    /**
     * Sets the monetary amount required to rent this property
     */
    rent?: number // double
    /**
     * Sets the rent collection frequency (weekly/monthly/yearly)
     */
    rentFrequency?: string
    /**
     * Sets the acceptable letting terms (short/long/any)
     */
    term?: string
    /**
     * Sets the letting status of this property (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn)
     */
    status?: string
  }
  /**
   * Sets the property types
   */
  type?: string[]
  /**
   * Sets the property style
   */
  style?: string[]
  /**
   * Sets the property situation
   */
  situation?: string[]
  /**
   * Sets the property parking
   */
  parking?: string[]
  /**
   * Sets the property age
   */
  age?: string[]
  /**
   * Sets the property locality
   */
  locality?: string[]
  /**
   * Sets the listing of room details
   */
  rooms?: {
    name?: string
    dimensions?: string
    description?: string
  }[]
  /**
   * Sets the properties negotiatior id
   */
  negotiatorId?: string
  /**
   * Sets the properties office ids
   */
  officeIds?: string[]
  /**
   * Sets the identifier of the area that the property resides in
   */
  areaId?: string
  /**
   * Sets a JSON fragment to attach to this property as metadata
   */
  metadata?: {
    [name: string]: any
  }
}
export interface CreatePropertyRoomModel {
  name?: string
  dimensions?: string
  description?: string
}
export interface CreatePropertySellingModel {
  /**
   * Sets the date that the property was flagged as for sale
   */
  instructed?: string // date-time
  /**
   * Sets the asking price of the property
   */
  price?: number // int32
  /**
   * Sets the price qualifier (askingPrice/priceOnApplication/guidePrice/offersInRegion/offersOver/offersInExcess/fixedPrice/priceReducedTo)
   */
  qualifier?: string
  /**
   * Sets the sales status (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn)
   */
  status?: string
  /**
   * Sets details of the sales tenure of the property
   */
  tenure?: {
    /**
     * Sets the type of tenure that applies to this property
     */
    type?: string
    /**
     * Sets tenure expiration date
     */
    expiry?: string // date-time
  }
}
export interface CreatePropertyTenureModel {
  /**
   * Sets the type of tenure that applies to this property
   */
  type?: string
  /**
   * Sets tenure expiration date
   */
  expiry?: string // date-time
}
/**
 * Model to create a tasks recipient
 */
export interface CreateRecipientModel {
  /**
   * Unique identifier of the tasks recipient
   */
  id?: string
  /**
   * Entity type of the recipient (office/negotiator)
   */
  type?: string
}
/**
 * Model to create a source
 */
export interface CreateSourceModel {
  /**
   * Sets the sources name
   */
  name?: string
  /**
   * Sets the sources type
   */
  type?: string
  /**
   * Sets a list of departments related to this source
   */
  departmentIds?: string[]
  /**
   * Sets a list of offices related to this source
   */
  officeIds?: string[]
}
/**
 * Model used to create a new task
 */
export interface CreateTaskModel {
  /**
   * Sets the date the task will be activated
   */
  activates?: string // date-time
  /**
   * Sets the date the task will be completed
   */
  completed?: string // date-time
  /**
   * Sets the type of task to create
   */
  typeId?: string
  /**
   * Sets the unique identifier of the negotiator whos creating the task
   */
  senderId?: string
  /**
   * Sets the text against the task or message
   */
  text?: string
  /**
   * Sets the unique identifier of the landlord the task is related too
   */
  landlordId?: string
  /**
   * Sets the unique identifier of the property the task is related too
   */
  propertyId?: string
  /**
   * Sets the unique identifier of the applicant the task is related too
   */
  applicantId?: string
  /**
   * Sets the unique identifier of the tenancy the task is related too
   */
  tenancyId?: string
  /**
   * Sets the unique identifier of the contact the task is related too
   */
  contactId?: string
  /**
   * Sets the recipient to create against this task
   */
  recipient?: {
    /**
     * Unique identifier of the tasks recipient
     */
    id?: string
    /**
     * Entity type of the recipient (office/negotiator)
     */
    type?: string
  }
  /**
   * Sets a JSON fragment to attach to this task as metadata
   */
  metadata?: {
    [name: string]: any
  }
}
/**
 * Request body to create a works order item
 */
export interface CreateWorksOrderItemModel {
  /**
   * Sets the notes against the work order item
   */
  notes?: string
  /**
   * Sets the entity to charge the work order item to
   */
  chargeTo?: string
  /**
   * Sets the estimate of the work order item
   */
  estimate?: number // double
  /**
   * Sets the estimate type of the work order item
   */
  estimateType?: string
  /**
   * Sets the cost of the work order item
   */
  cost?: number // double
}
/**
 * Request body to create a works order
 */
export interface CreateWorksOrderModel {
  /**
   * Sets the id of the company that has been selected to perform the work
   */
  companyId?: string
  /**
   * Sets the id of the property the work is for
   */
  propertyId?: string
  /**
   * Sets the id of the tenancy that originated the work
   */
  tenancyId?: string
  /**
   * Sets the id of the negotiator that booked the work
   */
  negotiatorId?: string
  /**
   * Sets the id of the type of work that needs to be performed
   */
  typeId?: string
  /**
   * Sets the status of the works order
   */
  status?: string
  /**
   * Sets the description of the works order
   */
  description?: string
  /**
   * Sets the person who reported the fault
   */
  reporter?: string
  /**
   * Sets the date the works order was booked
   */
  booked?: string // date-time
  /**
   * Sets the date the works order is required
   */
  required?: string // date-time
  /**
   * Sets the date the works order was completed
   */
  completed?: string // date-time
  /**
   * Sets the items to create against the works order
   */
  items?: {
    /**
     * Sets the notes against the work order item
     */
    notes?: string
    /**
     * Sets the entity to charge the work order item to
     */
    chargeTo?: string
    /**
     * Sets the estimate of the work order item
     */
    estimate?: number // double
    /**
     * Sets the estimate type of the work order item
     */
    estimateType?: string
    /**
     * Sets the cost of the work order item
     */
    cost?: number // double
  }[]
  /**
   * Sets a JSON fragment to attach to this works order as metadata
   */
  metadata?: {
    [name: string]: any
  }
}
/**
 * Model representing a department
 */
export interface DepartmentModel {
  /**
   * Gets the unique department identifier
   */
  id?: string
  /**
   * Gets the date and time the department was created
   */
  created?: string // date-time
  /**
   * Gets the date and time the department was last modified
   */
  modified?: string // date-time
  /**
   * Gets the name of the department
   */
  name?: string
  /**
   * Gets a list of property type values that will be accepted by other services
   */
  typeOptions?: string[]
  /**
   * Gets a list of property style values that will be accepted by other services
   */
  styleOptions?: string[]
  /**
   * Gets a list of property situation values that will be accepted by other services
   */
  situationOptions?: string[]
  /**
   * Gets a list of property parking values that will be accepted by other services
   */
  parkingOptions?: string[]
  /**
   * Gets a list of property age values that will be accepted by other services
   */
  ageOptions?: string[]
  /**
   * Gets a list of property locality values that will be accepted by other services
   */
  localityOptions?: string[]
  readonly _links?: {
    [name: string]: {
      href?: string
    }
  }
  readonly _embedded?: {
    [name: string]: any
  }
}
/**
 * Model representing a Document
 */
export interface DocumentModel {
  /**
   * Gets the unique identifier
   */
  id?: string
  /**
   * Gets the datetime when the document was created
   */
  created?: string // date-time
  /**
   * Gets the date and time that the document was last modified
   */
  modified?: string // date-time
  /**
   * Gets the type of entity that this document is associated with
   */
  associatedType?: string
  /**
   * Gets the Id of the entity that this document is associated with
   */
  associatedId?: string
  /**
   * Gets the Id of the document type
   */
  typeId?: string
  /**
   * Gets the filename assigned to the document
   */
  name?: string
  readonly _links?: {
    [name: string]: {
      href?: string
    }
  }
  readonly _embedded?: {
    [name: string]: any
  }
}
export interface EntityTagHeaderValue {
  readonly tag?: {
    readonly buffer?: string
    readonly offset?: number // int32
    readonly length?: number // int32
    readonly value?: string
    readonly hasValue?: boolean
  }
  readonly isWeak?: boolean
}
export interface FileResult {
  readonly contentType?: string
  fileDownloadName?: string
  lastModified?: string // date-time
  entityTag?: {
    readonly tag?: {
      readonly buffer?: string
      readonly offset?: number // int32
      readonly length?: number // int32
      readonly value?: string
      readonly hasValue?: boolean
    }
    readonly isWeak?: boolean
  }
  enableRangeProcessing?: boolean
}
/**
 * Represents an attempt to verify an individual contacts identity
 */
export interface IdentityCheckModel {
  /**
   * Gets the unique identifier
   */
  id?: string
  /**
   * Gets the unique identifier of the contact associated to the id check
   */
  contactId?: string
  /**
   * Gets the date and time that the identity check was created
   */
  created?: string // date-time
  /**
   * Gets the date and time that the identity check was last modified
   */
  modified?: string // date-time
  /**
   * Gets the date that the identity check was performed
   * Note that this can be different to the date that the check was created
   */
  checkDate?: string // date-time
  /**
   * Gets the status of this identity check  (pass/fail/pending/cancelled/warnings/unchecked)
   */
  status?: string
  /**
   * Gets the id of the negotiator that performed the identity check
   * Note that this can be different to the negotiator that created the check
   */
  negotiatorId?: string
  /**
   * Gets the details of document one that has been provided for this identity check
   */
  document1?: {
    /**
     * Gets the unique identifier of the document
     */
    id?: string
    /**
     * Gets the id of the document type that describes this document
     */
    typeId?: string
    /**
     * Gets the date that this document expires
     */
    expiry?: string // date-time
    /**
     * Gets the textual details of the identity document (eg. passport number)
     */
    details?: string
  }
  /**
   * Gets the details of document two that has been provided for this identity check
   */
  document2?: {
    /**
     * Gets the unique identifier of the document
     */
    id?: string
    /**
     * Gets the id of the document type that describes this document
     */
    typeId?: string
    /**
     * Gets the date that this document expires
     */
    expiry?: string // date-time
    /**
     * Gets the textual details of the identity document (eg. passport number)
     */
    details?: string
  }
  /**
   * Gets a listing of additional metadata that has been set against this identity check
   */
  metadata?: {
    [name: string]: any
  }
  readonly _links?: {
    [name: string]: {
      href?: string
    }
  }
  readonly _embedded?: {
    [name: string]: any
  }
}
/**
 * Represents the details of a document added to an identity check
 */
export interface IdentityDocumentModel {
  /**
   * Gets the unique identifier of the document
   */
  id?: string
  /**
   * Gets the id of the document type that describes this document
   */
  typeId?: string
  /**
   * Gets the date that this document expires
   */
  expiry?: string // date-time
  /**
   * Gets the textual details of the identity document (eg. passport number)
   */
  details?: string
}
/**
 * Create (OR update) a relationship between the applicant and a contact
 */
export interface InsertApplicantContactRelationshipModel {
  /**
   * The unique identifier of the contact to create a relationship with
   */
  associatedId?: string
  /**
   * The type of relationship to create (contact/company)
   */
  associatedType?: string
  /**
   * Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship
   */
  isMain?: boolean
}
/**
 * Create (OR update) a relationship between the landlord and a contact
 */
export interface InsertLandlordContactRelationshipModel {
  /**
   * The unique identifier of the contact to create a relationship with
   */
  associatedId?: string
  /**
   * The type of relationship to create (contact/company)
   */
  associatedType?: string
  /**
   * Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship
   */
  isMain?: boolean
}
/**
 * Create (OR update) a relationship between the vendor and a contact
 */
export interface InsertVendorContactRelationshipModel {
  /**
   * The unique identifier of the contact to create a relationship with
   */
  associatedId?: string
  /**
   * The type of relationship to create (contact/company)
   */
  associatedType?: string
  /**
   * Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship
   */
  isMain?: boolean
}
/**
 * Model representing the physical address of a building or premise
 */
export interface LandlordContactAddressModel {
  /**
   * Gets the building name
   */
  buildingName?: string
  /**
   * Gets the building number
   */
  buildingNumber?: string
  /**
   * Gets the first line of the address
   */
  line1?: string
  /**
   * Gets the second line of the address
   */
  line2?: string
  /**
   * Gets the third line of the address
   */
  line3?: string
  /**
   * Gets the fourth line of the address
   */
  line4?: string
  /**
   * Gets the postcode
   */
  postcode?: string
  /**
   * Gets the ISO-3166 country code associated with the address
   */
  countryId?: string
}
/**
 * Model representing the details of a contact relationship associated with a landlord entity
 */
export interface LandlordContactModel {
  /**
   * Gets the unique identifier of the contact
   */
  id?: string
  /**
   * Gets the name of this contact or company
   */
  name?: string
  /**
   * Gets the type of this contact (Contact/Company)
   */
  type?: string
  /**
   * The home phone number of the contact
   */
  homePhone?: string
  /**
   * The work phone number of the contact
   */
  workPhone?: string
  /**
   * The mobile phone number of the contact
   */
  mobilePhone?: string
  /**
   * The email address of the contact
   */
  email?: string
  /**
   * Gets the primary address of the contact
   */
  primaryAddress?: {
    /**
     * Gets the building name
     */
    buildingName?: string
    /**
     * Gets the building number
     */
    buildingNumber?: string
    /**
     * Gets the first line of the address
     */
    line1?: string
    /**
     * Gets the second line of the address
     */
    line2?: string
    /**
     * Gets the third line of the address
     */
    line3?: string
    /**
     * Gets the fourth line of the address
     */
    line4?: string
    /**
     * Gets the postcode
     */
    postcode?: string
    /**
     * Gets the ISO-3166 country code associated with the address
     */
    countryId?: string
  }
  readonly _links?: {
    [name: string]: {
      href?: string
    }
  }
  readonly _embedded?: {
    [name: string]: any
  }
}
export interface LandlordModel {
  id?: string
  /**
   * Gets the datetime when the landlord was created
   */
  created?: string // date-time
  /**
   * Gets the date and time that the landlord was last modified
   */
  modified?: string // date-time
  /**
   * Gets the active flag
   */
  active?: boolean
  /**
   * Gets the unique identifier of the landlords solicitor
   */
  solicitorId?: string
  /**
   * Gets the office id that is associated to this landlord
   */
  officeId?: string
  /**
   * Gets the landlords source information
   */
  source?: {
    /**
     * Gets the unique identifier of the landlords source
     */
    id?: string
    /**
     * Gets the landlords source type
     */
    type?: string
    readonly _links?: {
      [name: string]: {
        href?: string
      }
    }
    readonly _embedded?: {
      [name: string]: any
    }
  }
  /**
   * Gets a collection of contact entities attached to this landlord
   * The primary contact will always appear first in the collection
   */
  related?: {
    /**
     * Gets the unique identifier of the contact
     */
    id?: string
    /**
     * Gets the name of this contact or company
     */
    name?: string
    /**
     * Gets the type of this contact (Contact/Company)
     */
    type?: string
    /**
     * The home phone number of the contact
     */
    homePhone?: string
    /**
     * The work phone number of the contact
     */
    workPhone?: string
    /**
     * The mobile phone number of the contact
     */
    mobilePhone?: string
    /**
     * The email address of the contact
     */
    email?: string
    /**
     * Gets the primary address of the contact
     */
    primaryAddress?: {
      /**
       * Gets the building name
       */
      buildingName?: string
      /**
       * Gets the building number
       */
      buildingNumber?: string
      /**
       * Gets the first line of the address
       */
      line1?: string
      /**
       * Gets the second line of the address
       */
      line2?: string
      /**
       * Gets the third line of the address
       */
      line3?: string
      /**
       * Gets the fourth line of the address
       */
      line4?: string
      /**
       * Gets the postcode
       */
      postcode?: string
      /**
       * Gets the ISO-3166 country code associated with the address
       */
      countryId?: string
    }
    readonly _links?: {
      [name: string]: {
        href?: string
      }
    }
    readonly _embedded?: {
      [name: string]: any
    }
  }[]
  /**
   * Gets a listing of additional metadata that has been set against this landlord
   */
  metadata?: {
    [name: string]: any
  }
  readonly _links?: {
    [name: string]: {
      href?: string
    }
  }
  readonly _embedded?: {
    [name: string]: any
  }
}
/**
 * Model representing the details of a landlords source
 */
export interface LandlordSourceModel {
  /**
   * Gets the unique identifier of the landlords source
   */
  id?: string
  /**
   * Gets the landlords source type
   */
  type?: string
  readonly _links?: {
    [name: string]: {
      href?: string
    }
  }
  readonly _embedded?: {
    [name: string]: any
  }
}
export interface LinkModel {
  href?: string
}
export interface ListItemModel {
  /**
   * The unique identifier
   */
  id?: string
  /**
   * The text value corresponding to the id
   */
  value?: string
}
export interface NegotiatorModel {
  /**
   * Gets the unique identifier
   */
  id?: string
  /**
   * Gets the date and time that the negotiator was created
   */
  created?: string // date-time
  /**
   * Gets the date and time that the negotiator was last modified
   */
  modified?: string // date-time
  /**
   * Gets the name of the negotiator
   */
  name?: string
  /**
   * Gets the job title of the negotiator
   */
  jobTitle?: string
  /**
   * Gets the active flag for a negotiator
   */
  active?: boolean
  /**
   * Gets the office the negotiator is linked too
   */
  officeId?: string
  /**
   * The work phone number of the negotiator
   */
  workPhone?: string
  /**
   * The mobile phone number of the negotiator
   */
  mobilePhone?: string
  /**
   * The email address of the negotiator
   */
  email?: string
  /**
   * Gets a listing of additional metadata that has been set against this negotiator
   */
  metadata?: {
    [name: string]: any
  }
  readonly _links?: {
    [name: string]: {
      href?: string
    }
  }
  readonly _embedded?: {
    [name: string]: any
  }
}
/**
 * Model representing the physical address of a building or premise
 */
export interface OfferContactAddressModel {
  /**
   * Gets the building name
   */
  buildingName?: string
  /**
   * Gets the building number
   */
  buildingNumber?: string
  /**
   * Gets the first line of the address
   */
  line1?: string
  /**
   * Gets the second line of the address
   */
  line2?: string
  /**
   * Gets the third line of the address
   */
  line3?: string
  /**
   * Gets the fourth line of the address
   */
  line4?: string
  /**
   * Gets the postcode
   */
  postcode?: string
  /**
   * Gets the ISO-3166 country code associated with the address
   */
  countryId?: string
}
/**
 * Model representing the details of a contact relationship associated with an offer entity
 */
export interface OfferContactModel {
  /**
   * Gets the unique identifier of the contact
   */
  id?: string
  /**
   * Gets the name of this contact or company
   */
  name?: string
  /**
   * Gets the type of this contact (contact/company)
   */
  type?: string
  /**
   * The home phone number of the contact
   */
  homePhone?: string
  /**
   * The work phone number of the contact
   */
  workPhone?: string
  /**
   * The mobile phone number of the contact
   */
  mobilePhone?: string
  /**
   * The email address of the contact
   */
  email?: string
  /**
   * Gets the primary address of the contact
   */
  primaryAddress?: {
    /**
     * Gets the building name
     */
    buildingName?: string
    /**
     * Gets the building number
     */
    buildingNumber?: string
    /**
     * Gets the first line of the address
     */
    line1?: string
    /**
     * Gets the second line of the address
     */
    line2?: string
    /**
     * Gets the third line of the address
     */
    line3?: string
    /**
     * Gets the fourth line of the address
     */
    line4?: string
    /**
     * Gets the postcode
     */
    postcode?: string
    /**
     * Gets the ISO-3166 country code associated with the address
     */
    countryId?: string
  }
  readonly _links?: {
    [name: string]: {
      href?: string
    }
  }
  readonly _embedded?: {
    [name: string]: any
  }
}
/**
 * Model to retrieve offer details
 */
export interface OfferModel {
  /**
   * Gets the unique identifier of the offer
   */
  id?: string
  /**
   * Gets the date the offer was created
   */
  created?: string // date-time
  /**
   * Gets the date the offer was last modified
   */
  modified?: string // date-time
  /**
   * Gets the currency that applies to monetary amounts exposed in the model
   */
  currency?: string
  /**
   * Gets the id of the applicant associated to the offer
   */
  applicantId?: string
  /**
   * Gets the id of the property associated to the offer
   */
  propertyId?: string
  /**
   * Gets the id of the negotiator associated to the offer
   */
  negotiatorId?: string
  /**
   * Gets the date the offer was made
   */
  date?: string // date-time
  /**
   * Gets the amount the offer was for
   */
  amount?: number // double
  /**
   * Gets the status of the offer
   */
  status?: string
  /**
   * Gets the requested inclusions of the offer
   */
  inclusions?: string
  /**
   * Gets the requested exclusions of the offer
   */
  exclusions?: string
  /**
   * Gets the conditions of the offer
   */
  conditions?: string
  /**
   * Gets a collection of contact entities attached to this offer
   * The primary contact will always appear first in the collection
   */
  related?: {
    /**
     * Gets the unique identifier of the contact
     */
    id?: string
    /**
     * Gets the name of this contact or company
     */
    name?: string
    /**
     * Gets the type of this contact (contact/company)
     */
    type?: string
    /**
     * The home phone number of the contact
     */
    homePhone?: string
    /**
     * The work phone number of the contact
     */
    workPhone?: string
    /**
     * The mobile phone number of the contact
     */
    mobilePhone?: string
    /**
     * The email address of the contact
     */
    email?: string
    /**
     * Gets the primary address of the contact
     */
    primaryAddress?: {
      /**
       * Gets the building name
       */
      buildingName?: string
      /**
       * Gets the building number
       */
      buildingNumber?: string
      /**
       * Gets the first line of the address
       */
      line1?: string
      /**
       * Gets the second line of the address
       */
      line2?: string
      /**
       * Gets the third line of the address
       */
      line3?: string
      /**
       * Gets the fourth line of the address
       */
      line4?: string
      /**
       * Gets the postcode
       */
      postcode?: string
      /**
       * Gets the ISO-3166 country code associated with the address
       */
      countryId?: string
    }
    readonly _links?: {
      [name: string]: {
        href?: string
      }
    }
    readonly _embedded?: {
      [name: string]: any
    }
  }[]
  /**
   * Gets a listing of additional metadata that has been set against this offer
   */
  metadata?: {
    [name: string]: any
  }
  readonly _links?: {
    [name: string]: {
      href?: string
    }
  }
  readonly _embedded?: {
    [name: string]: any
  }
}
/**
 * Model representing the physical address of a building or premise
 */
export interface OfficeAddressModel {
  /**
   * Gets the type of address (primary/secondary/home/work/forwarding/company/previous)
   */
  type?: string
  /**
   * Gets the building name
   */
  buildingName?: string
  /**
   * Gets the building number
   */
  buildingNumber?: string
  /**
   * Gets the first line of the address
   */
  line1?: string
  /**
   * Gets the second line of the address
   */
  line2?: string
  /**
   * Gets the third line of the address
   */
  line3?: string
  /**
   * Gets the fourth line of the address
   */
  line4?: string
  /**
   * Gets the postcode
   */
  postcode?: string
  /**
   * Gets the ISO-3166 country code associated with the address
   */
  countryId?: string
}
export interface OfficeModel {
  /**
   * Gets the unique identifier
   */
  id?: string
  /**
   * Gets the date and time that the office was created
   */
  created?: string // date-time
  /**
   * Gets the date and time that the office was last modified
   */
  modified?: string // date-time
  /**
   * Gets the name of the office
   */
  name?: string
  /**
   * Gets the manager of the office
   */
  manager?: string
  /**
   * Gets the address of the office
   */
  address?: {
    /**
     * Gets the type of address (primary/secondary/home/work/forwarding/company/previous)
     */
    type?: string
    /**
     * Gets the building name
     */
    buildingName?: string
    /**
     * Gets the building number
     */
    buildingNumber?: string
    /**
     * Gets the first line of the address
     */
    line1?: string
    /**
     * Gets the second line of the address
     */
    line2?: string
    /**
     * Gets the third line of the address
     */
    line3?: string
    /**
     * Gets the fourth line of the address
     */
    line4?: string
    /**
     * Gets the postcode
     */
    postcode?: string
    /**
     * Gets the ISO-3166 country code associated with the address
     */
    countryId?: string
  }
  /**
   * The work phone number of the office
   */
  workPhone?: string
  /**
   * The email address of the office
   */
  email?: string
  /**
   * Gets a listing of additional metadata that has been set against this office
   */
  metadata?: {
    [name: string]: any
  }
  readonly _links?: {
    [name: string]: {
      href?: string
    }
  }
  readonly _embedded?: {
    [name: string]: any
  }
}
export interface PagedResultApplicantModel_ {
  _embedded?: {
    /**
     * The unique identifier of the applicant
     */
    id?: string
    /**
     * The date and time when the applicant was created
     */
    created?: string // date-time
    /**
     * The date and time when the applicant was last modified
     */
    modified?: string // date-time
    /**
     * Indicates whether the applicant is look to buy or rent a property (buying/renting)
     */
    marketingMode?: string
    /**
     * The ISO-4217 currency code that relates to monetary amounts specified by this applicant
     */
    currency?: string
    /**
     * A flag determining whether or not the applicant is actively looking for a property
     */
    active?: boolean
    /**
     * A free text field describing any adhoc buying or renting requirements
     */
    notes?: string
    /**
     * The date when the applicant was last contacted
     */
    lastCall?: string // date-time
    /**
     * The date when the applicant is next due to be contacted
     */
    nextCall?: string // date-time
    /**
     * The unique identifier of the department that the applicant requirements are associated with. This applicant will only match to properties with the same value
     */
    departmentId?: string
    /**
     * The unique identifier of the solicitor associated to this applicant
     */
    solicitorId?: string
    /**
     * A list of property type requirements taken from the full listing of the associated department
     */
    type?: string[]
    /**
     * A list of property style requirements taken from the full listing of the associated department
     */
    style?: string[]
    /**
     * A list of property situation requirements taken from the full listing of the associated department
     */
    situation?: string[]
    /**
     * A list of property parking requirements taken from the full listing of the associated department
     */
    parking?: string[]
    /**
     * A list of property age requirements taken from the full listing of the associated department
     */
    age?: string[]
    /**
     * A list of property locality requirements taken from the full listing of the associated department
     */
    locality?: string[]
    /**
     * The minimum number of bedrooms the applicant requires
     */
    bedroomsMin?: number // int32
    /**
     * The maximum number of bedrooms the applicant requires
     */
    bedroomsMax?: number // int32
    /**
     * The minimum number of reception rooms the applicant requires
     */
    receptionsMin?: number // int32
    /**
     * The maximum number of reception rooms the applicant requires
     */
    receptionsMax?: number // int32
    /**
     * The minimum number of bathrooms the applicant requires
     */
    bathroomsMin?: number // int32
    /**
     * The maximum number of bathrooms the applicant requires
     */
    bathroomsMax?: number // int32
    /**
     * The applicants location type (areas/addresses/none)
     */
    locationType?: string
    /**
     * The applicants location options
     */
    locationOptions?: string[]
    /**
     * The details specific to applicants with a marketingMode of buying
     */
    buying?: {
      /**
       * The lower bound of the applicant's budget
       */
      priceFrom?: number // int32
      /**
       * The upper bound of the applicant's budget
       */
      priceTo?: number // int32
    }
    /**
     * The details specific to applicants with a marketingMode of renting
     */
    renting?: {
      /**
       * The date the applicant is looking to move to a new property
       */
      moveDate?: string // date-time
      /**
       * The applicant's preferred letting term (long/short/any)
       */
      term?: string
      /**
       * The lower bound of the applicant's budget
       */
      rentFrom?: number // double
      /**
       * The upper bound of the applicant's budget
       */
      rentTo?: number // double
      /**
       * The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually)
       */
      rentFrequency?: string
      /**
       * A list of property furnishing requirements taken from the full listing of the associated department. Only applicable to applicants with a marketingMode of renting
       */
      furnishing?: string[]
    }
    /**
     * The applicant's outdoor space requirements
     */
    externalArea?: {
      /**
       * The unit of area that each amount corresponds to (acres/hectares)
       */
      type?: string
      /**
       * The minimum unit value of outside space that the applicant is looking for
       */
      amountFrom?: number // double
      /**
       * The maximum unit value of outside space that the applicant is looking for
       */
      amountTo?: number // double
    }
    /**
     * The applicant's indoor space requirements
     */
    internalArea?: {
      /**
       * The unit of area that each amount corresponds to (squareFeet/squareMetres)
       */
      type?: string
      /**
       * The unit value of inside space that the applicant is looking for
       */
      amount?: number // double
    }
    /**
     * Gets the applicants source information
     */
    source?: {
      /**
       * Gets the unique identifier of the applicants source
       */
      id?: string
      /**
       * Gets the applicants source type
       */
      type?: string
      readonly _links?: {
        [name: string]: {
          href?: string
        }
      }
      readonly _embedded?: {
        [name: string]: any
      }
    }
    /**
     * A collection of office unique identifiers that are associated to the applicant. The first identifier listed is considered to be the primary office
     */
    officeIds?: string[]
    /**
     * A collection of negotiator unique identifiers that are associated to the applicant. The first identifier listed is considered to be the primary negotiator
     */
    negotiatorIds?: string[]
    /**
     * A collection of summarised contacts attached to the applicant. The first contact listed is considered to be the primary contact
     */
    related?: {
      /**
       * The unique identifier of the contact
       */
      id?: string
      /**
       * The name of the contact
       */
      name?: string
      /**
       * The type of the contact (company/contact)
       */
      type?: string
      /**
       * The home phone number of the contact
       */
      homePhone?: string
      /**
       * The work phone number of the contact
       */
      workPhone?: string
      /**
       * The mobile phone number of the contact
       */
      mobilePhone?: string
      /**
       * The email address of the contact
       */
      email?: string
      /**
       * The primary address of the contact
       */
      primaryAddress?: {
        /**
         * The building name
         */
        buildingName?: string
        /**
         * The building number
         */
        buildingNumber?: string
        /**
         * The first line of the address
         */
        line1?: string
        /**
         * The second line of the address
         */
        line2?: string
        /**
         * The third line of the address
         */
        line3?: string
        /**
         * The fourth line of the address
         */
        line4?: string
        /**
         * The postcode
         */
        postcode?: string
        /**
         * The ISO-3166 country code that the address resides within
         */
        countryId?: string
      }
      readonly _links?: {
        [name: string]: {
          href?: string
        }
      }
      readonly _embedded?: {
        [name: string]: any
      }
    }[]
    /**
     * A listing of app specific metadata that has been set against this applicant
     */
    metadata?: {
      [name: string]: any
    }
    readonly _links?: {
      [name: string]: {
        href?: string
      }
    }
    readonly _embedded?: {
      [name: string]: any
    }
  }[]
  pageNumber?: number // int32
  pageSize?: number // int32
  pageCount?: number // int32
  totalCount?: number // int32
  _links?: {
    [name: string]: {
      href?: string
    }
  }
}
export interface PagedResultAppointmentModel_ {
  _embedded?: {
    /**
     * Gets the unique identifier
     */
    id?: string
    /**
     * Gets the datetime when the appointment was created
     */
    created?: string // date-time
    /**
     * Gets the date and time that the appointment was last modified
     */
    modified?: string // date-time
    /**
     * Gets the date and time that the appointment will start
     */
    start?: string // date-time
    /**
     * Gets the date and time that the appointment will end
     */
    end?: string // date-time
    /**
     * Gets the type of appointment
     */
    typeId?: string
    /**
     * Gets the appointment description
     */
    description?: string
    /**
     * Gets directions to the appointment location
     */
    directions?: string
    /**
     * Flag denoting whether or not the appointment recurs
     */
    recurring?: boolean
    /**
     * Flag denoting whether or not the appointment is cancelled
     */
    cancelled?: boolean
    /**
     * Gets the appointments follow up information
     */
    followUp?: {
      /**
       * Gets the date that the appointment should be followed up on
       */
      due?: string // date-time
      /**
       * Gets the unique identifier of a pre-defined follow up response type
       */
      responseId?: string
      /**
       * Gets the internal follow up notes to be stored against the appointment
       */
      notes?: string
    }
    /**
     * Gets the unique identifier of the property related to the appointment
     */
    propertyId?: string
    /**
     * Gets the id of the person that organised the appointment
     */
    organiserId?: string
    /**
     * Gets a collection of negotiators related to the appointment
     */
    negotiatorIds?: string[]
    /**
     * Gets a collection of offices related to the appointment
     */
    officeIds?: string[]
    /**
     * Gets a collection of attendees who are requested to attend the appointment
     */
    attendee?: {
      /**
       * Gets the identifier of the attendee
       */
      id?: string
      /**
       * Gets the type of attendee
       */
      type?: string
      /**
       * Gets the contacts of this attendee
       */
      contacts?: {
        /**
         * Gets the identifier of the contact
         */
        id?: string
        /**
         * Gets the name of the contact
         */
        name?: string
        /**
         * Gets a collection of the contacts' contact details
         */
        communicationDetails?: {
          /**
           * Gets the label representing the type of detail (eg E-mail)
           */
          label?: string
          /**
           * Gets the contact detail (eg the actual telephone number or email address)
           */
          detail?: string
        }[]
      }[]
      readonly _links?: {
        [name: string]: {
          href?: string
        }
      }
      readonly _embedded?: {
        [name: string]: any
      }
    }
    /**
     * Flag denoting whether or not the appointment is accompanied
     */
    accompanied?: boolean
    /**
     * Flag denoting whether or not the negotiator is confirmed
     */
    negotiatorConfirmed?: boolean
    /**
     * Flag denoting whether or not the attendee is confirmed
     */
    attendeeConfirmed?: boolean
    /**
     * Flag denoting whether or not the property is confirmed
     */
    propertyConfirmed?: boolean
    /**
     * Gets a listing of additional metadata that has been set against this appointment
     */
    metadata?: {
      [name: string]: any
    }
    readonly _links?: {
      [name: string]: {
        href?: string
      }
    }
    readonly _embedded?: {
      [name: string]: any
    }
  }[]
  pageNumber?: number // int32
  pageSize?: number // int32
  pageCount?: number // int32
  totalCount?: number // int32
  _links?: {
    [name: string]: {
      href?: string
    }
  }
}
export interface PagedResultCompanyModel_ {
  _embedded?: {
    /**
     * Gets the unique identifier
     */
    id?: string
    /**
     * Gets the date and time that the company was created
     */
    created?: string // date-time
    /**
     * Gets the date and time that the company was last modified
     */
    modified?: string // date-time
    /**
     * Gets the name of the company
     */
    name?: string
    /**
     * Gets the branch of the company
     */
    branch?: string
    /**
     * Gets the notes stored against the company
     */
    notes?: string
    /**
     * Gets a flag to indicate if this company has been marked as active
     */
    active?: boolean
    /**
     * Gets a flag to indicate if this company is vat registered
     */
    vatRegistered?: boolean
    /**
     * Gets a list of type ids
     */
    typeIds?: string[]
    /**
     * Gets the supplier type id
     */
    supplierTypeId?: string
    /**
     * The work phone number of the company
     */
    workPhone?: string
    /**
     * The mobile phone number of the company
     */
    mobilePhone?: string
    /**
     * The email address of the company
     */
    email?: string
    /**
     * Gets the address for this company
     */
    address?: {
      /**
       * Gets the building name
       */
      buildingName?: string
      /**
       * Gets the building number
       */
      buildingNumber?: string
      /**
       * Gets the first line of the address
       */
      line1?: string
      /**
       * Gets the second line of the address
       */
      line2?: string
      /**
       * Gets the third line of the address
       */
      line3?: string
      /**
       * Gets the fourth line of the address
       */
      line4?: string
      /**
       * Gets the postcode
       */
      postcode?: string
      /**
       * Gets the ISO-3166 country code associated with the address
       */
      country?: string
    }
    /**
     * Gets the collection of office ids that are related to this company
     */
    officeIds?: string[]
    /**
     * Gets the collection of negotiator ids that are related to this company
     */
    negotiatorIds?: string[]
    /**
     * Gets a listing of additional metadata that has been set against this company
     */
    metadata?: {
      [name: string]: any
    }
    readonly _links?: {
      [name: string]: {
        href?: string
      }
    }
    readonly _embedded?: {
      [name: string]: any
    }
  }[]
  pageNumber?: number // int32
  pageSize?: number // int32
  pageCount?: number // int32
  totalCount?: number // int32
  _links?: {
    [name: string]: {
      href?: string
    }
  }
}
export interface PagedResultContactModel_ {
  _embedded?: {
    /**
     * Gets the unique identifier
     */
    id?: string
    /**
     * Gets the date and time that the contact was created
     */
    created?: string // date-time
    /**
     * Gets the date and time that the contact was last modified
     */
    modified?: string // date-time
    /**
     * Gets the title of this contact (eg. Mr, Mrs, Miss, Dr)
     */
    title?: string
    /**
     * Gets the forename of this contact
     */
    forename?: string
    /**
     * Gets the surname of this contact
     */
    surname?: string
    /**
     * Gets the date of birth of this contact
     */
    dateOfBirth?: string // date-time
    /**
     * Gets a flag to indicate if this contact has been marked as active
     */
    active?: boolean
    /**
     * Gets the marketing consent status of this contact (grant/deny/notAsked)
     */
    marketingConsent?: string
    /**
     * Gets the contacts source information
     */
    source?: {
      /**
       * Gets the unique identifier of the contacts source
       */
      id?: string
      /**
       * Gets the contacts source type
       */
      type?: string
      readonly _links?: {
        [name: string]: {
          href?: string
        }
      }
      readonly _embedded?: {
        [name: string]: any
      }
    }
    /**
     * The home phone number of the contact
     */
    homePhone?: string
    /**
     * The work phone number of the contact
     */
    workPhone?: string
    /**
     * The mobile phone number of the contact
     */
    mobilePhone?: string
    /**
     * The email address of the contact
     */
    email?: string
    /**
     * Gets the contacts primary address
     */
    primaryAddress?: {
      /**
       * Gets the type of address (primary/secondary/home/work/forwarding/company/previous)
       */
      type?: string
      /**
       * Gets the building name
       */
      buildingName?: string
      /**
       * Gets the building number
       */
      buildingNumber?: string
      /**
       * Gets the first line of the address
       */
      line1?: string
      /**
       * Gets the second line of the address
       */
      line2?: string
      /**
       * Gets the third line of the address
       */
      line3?: string
      /**
       * Gets the fourth line of the address
       */
      line4?: string
      /**
       * Gets the postcode
       */
      postcode?: string
      /**
       * Gets the ISO-3166 country code associated with the address
       */
      countryId?: string
    }
    /**
     * Gets the contacts secondary address
     */
    secondaryAddress?: {
      /**
       * Gets the type of address (primary/secondary/home/work/forwarding/company/previous)
       */
      type?: string
      /**
       * Gets the building name
       */
      buildingName?: string
      /**
       * Gets the building number
       */
      buildingNumber?: string
      /**
       * Gets the first line of the address
       */
      line1?: string
      /**
       * Gets the second line of the address
       */
      line2?: string
      /**
       * Gets the third line of the address
       */
      line3?: string
      /**
       * Gets the fourth line of the address
       */
      line4?: string
      /**
       * Gets the postcode
       */
      postcode?: string
      /**
       * Gets the ISO-3166 country code associated with the address
       */
      countryId?: string
    }
    /**
     * Gets the contacts work address
     */
    workAddress?: {
      /**
       * Gets the type of address (primary/secondary/home/work/forwarding/company/previous)
       */
      type?: string
      /**
       * Gets the building name
       */
      buildingName?: string
      /**
       * Gets the building number
       */
      buildingNumber?: string
      /**
       * Gets the first line of the address
       */
      line1?: string
      /**
       * Gets the second line of the address
       */
      line2?: string
      /**
       * Gets the third line of the address
       */
      line3?: string
      /**
       * Gets the fourth line of the address
       */
      line4?: string
      /**
       * Gets the postcode
       */
      postcode?: string
      /**
       * Gets the ISO-3166 country code associated with the address
       */
      countryId?: string
    }
    /**
     * Gets a collection of office ids that are related to this contact
     */
    officeIds?: string[]
    /**
     * Gets a collection of negotiator ids that are related to this contact
     */
    negotiatorIds?: string[]
    /**
     * Gets a listing of additional metadata that has been set against this contact
     */
    metadata?: {
      [name: string]: any
    }
    readonly _links?: {
      [name: string]: {
        href?: string
      }
    }
    readonly _embedded?: {
      [name: string]: any
    }
  }[]
  pageNumber?: number // int32
  pageSize?: number // int32
  pageCount?: number // int32
  totalCount?: number // int32
  _links?: {
    [name: string]: {
      href?: string
    }
  }
}
export interface PagedResultDepartmentModel_ {
  _embedded?: {
    /**
     * Gets the unique department identifier
     */
    id?: string
    /**
     * Gets the date and time the department was created
     */
    created?: string // date-time
    /**
     * Gets the date and time the department was last modified
     */
    modified?: string // date-time
    /**
     * Gets the name of the department
     */
    name?: string
    /**
     * Gets a list of property type values that will be accepted by other services
     */
    typeOptions?: string[]
    /**
     * Gets a list of property style values that will be accepted by other services
     */
    styleOptions?: string[]
    /**
     * Gets a list of property situation values that will be accepted by other services
     */
    situationOptions?: string[]
    /**
     * Gets a list of property parking values that will be accepted by other services
     */
    parkingOptions?: string[]
    /**
     * Gets a list of property age values that will be accepted by other services
     */
    ageOptions?: string[]
    /**
     * Gets a list of property locality values that will be accepted by other services
     */
    localityOptions?: string[]
    readonly _links?: {
      [name: string]: {
        href?: string
      }
    }
    readonly _embedded?: {
      [name: string]: any
    }
  }[]
  pageNumber?: number // int32
  pageSize?: number // int32
  pageCount?: number // int32
  totalCount?: number // int32
  _links?: {
    [name: string]: {
      href?: string
    }
  }
}
export interface PagedResultDocumentModel_ {
  _embedded?: {
    /**
     * Gets the unique identifier
     */
    id?: string
    /**
     * Gets the datetime when the document was created
     */
    created?: string // date-time
    /**
     * Gets the date and time that the document was last modified
     */
    modified?: string // date-time
    /**
     * Gets the type of entity that this document is associated with
     */
    associatedType?: string
    /**
     * Gets the Id of the entity that this document is associated with
     */
    associatedId?: string
    /**
     * Gets the Id of the document type
     */
    typeId?: string
    /**
     * Gets the filename assigned to the document
     */
    name?: string
    readonly _links?: {
      [name: string]: {
        href?: string
      }
    }
    readonly _embedded?: {
      [name: string]: any
    }
  }[]
  pageNumber?: number // int32
  pageSize?: number // int32
  pageCount?: number // int32
  totalCount?: number // int32
  _links?: {
    [name: string]: {
      href?: string
    }
  }
}
export interface PagedResultIdentityCheckModel_ {
  _embedded?: {
    /**
     * Gets the unique identifier
     */
    id?: string
    /**
     * Gets the unique identifier of the contact associated to the id check
     */
    contactId?: string
    /**
     * Gets the date and time that the identity check was created
     */
    created?: string // date-time
    /**
     * Gets the date and time that the identity check was last modified
     */
    modified?: string // date-time
    /**
     * Gets the date that the identity check was performed
     * Note that this can be different to the date that the check was created
     */
    checkDate?: string // date-time
    /**
     * Gets the status of this identity check  (pass/fail/pending/cancelled/warnings/unchecked)
     */
    status?: string
    /**
     * Gets the id of the negotiator that performed the identity check
     * Note that this can be different to the negotiator that created the check
     */
    negotiatorId?: string
    /**
     * Gets the details of document one that has been provided for this identity check
     */
    document1?: {
      /**
       * Gets the unique identifier of the document
       */
      id?: string
      /**
       * Gets the id of the document type that describes this document
       */
      typeId?: string
      /**
       * Gets the date that this document expires
       */
      expiry?: string // date-time
      /**
       * Gets the textual details of the identity document (eg. passport number)
       */
      details?: string
    }
    /**
     * Gets the details of document two that has been provided for this identity check
     */
    document2?: {
      /**
       * Gets the unique identifier of the document
       */
      id?: string
      /**
       * Gets the id of the document type that describes this document
       */
      typeId?: string
      /**
       * Gets the date that this document expires
       */
      expiry?: string // date-time
      /**
       * Gets the textual details of the identity document (eg. passport number)
       */
      details?: string
    }
    /**
     * Gets a listing of additional metadata that has been set against this identity check
     */
    metadata?: {
      [name: string]: any
    }
    readonly _links?: {
      [name: string]: {
        href?: string
      }
    }
    readonly _embedded?: {
      [name: string]: any
    }
  }[]
  pageNumber?: number // int32
  pageSize?: number // int32
  pageCount?: number // int32
  totalCount?: number // int32
  _links?: {
    [name: string]: {
      href?: string
    }
  }
}
export interface PagedResultLandlordModel_ {
  _embedded?: {
    id?: string
    /**
     * Gets the datetime when the landlord was created
     */
    created?: string // date-time
    /**
     * Gets the date and time that the landlord was last modified
     */
    modified?: string // date-time
    /**
     * Gets the active flag
     */
    active?: boolean
    /**
     * Gets the unique identifier of the landlords solicitor
     */
    solicitorId?: string
    /**
     * Gets the office id that is associated to this landlord
     */
    officeId?: string
    /**
     * Gets the landlords source information
     */
    source?: {
      /**
       * Gets the unique identifier of the landlords source
       */
      id?: string
      /**
       * Gets the landlords source type
       */
      type?: string
      readonly _links?: {
        [name: string]: {
          href?: string
        }
      }
      readonly _embedded?: {
        [name: string]: any
      }
    }
    /**
     * Gets a collection of contact entities attached to this landlord
     * The primary contact will always appear first in the collection
     */
    related?: {
      /**
       * Gets the unique identifier of the contact
       */
      id?: string
      /**
       * Gets the name of this contact or company
       */
      name?: string
      /**
       * Gets the type of this contact (Contact/Company)
       */
      type?: string
      /**
       * The home phone number of the contact
       */
      homePhone?: string
      /**
       * The work phone number of the contact
       */
      workPhone?: string
      /**
       * The mobile phone number of the contact
       */
      mobilePhone?: string
      /**
       * The email address of the contact
       */
      email?: string
      /**
       * Gets the primary address of the contact
       */
      primaryAddress?: {
        /**
         * Gets the building name
         */
        buildingName?: string
        /**
         * Gets the building number
         */
        buildingNumber?: string
        /**
         * Gets the first line of the address
         */
        line1?: string
        /**
         * Gets the second line of the address
         */
        line2?: string
        /**
         * Gets the third line of the address
         */
        line3?: string
        /**
         * Gets the fourth line of the address
         */
        line4?: string
        /**
         * Gets the postcode
         */
        postcode?: string
        /**
         * Gets the ISO-3166 country code associated with the address
         */
        countryId?: string
      }
      readonly _links?: {
        [name: string]: {
          href?: string
        }
      }
      readonly _embedded?: {
        [name: string]: any
      }
    }[]
    /**
     * Gets a listing of additional metadata that has been set against this landlord
     */
    metadata?: {
      [name: string]: any
    }
    readonly _links?: {
      [name: string]: {
        href?: string
      }
    }
    readonly _embedded?: {
      [name: string]: any
    }
  }[]
  pageNumber?: number // int32
  pageSize?: number // int32
  pageCount?: number // int32
  totalCount?: number // int32
  _links?: {
    [name: string]: {
      href?: string
    }
  }
}
export interface PagedResultNegotiatorModel_ {
  _embedded?: {
    /**
     * Gets the unique identifier
     */
    id?: string
    /**
     * Gets the date and time that the negotiator was created
     */
    created?: string // date-time
    /**
     * Gets the date and time that the negotiator was last modified
     */
    modified?: string // date-time
    /**
     * Gets the name of the negotiator
     */
    name?: string
    /**
     * Gets the job title of the negotiator
     */
    jobTitle?: string
    /**
     * Gets the active flag for a negotiator
     */
    active?: boolean
    /**
     * Gets the office the negotiator is linked too
     */
    officeId?: string
    /**
     * The work phone number of the negotiator
     */
    workPhone?: string
    /**
     * The mobile phone number of the negotiator
     */
    mobilePhone?: string
    /**
     * The email address of the negotiator
     */
    email?: string
    /**
     * Gets a listing of additional metadata that has been set against this negotiator
     */
    metadata?: {
      [name: string]: any
    }
    readonly _links?: {
      [name: string]: {
        href?: string
      }
    }
    readonly _embedded?: {
      [name: string]: any
    }
  }[]
  pageNumber?: number // int32
  pageSize?: number // int32
  pageCount?: number // int32
  totalCount?: number // int32
  _links?: {
    [name: string]: {
      href?: string
    }
  }
}
export interface PagedResultOfferModel_ {
  _embedded?: {
    /**
     * Gets the unique identifier of the offer
     */
    id?: string
    /**
     * Gets the date the offer was created
     */
    created?: string // date-time
    /**
     * Gets the date the offer was last modified
     */
    modified?: string // date-time
    /**
     * Gets the currency that applies to monetary amounts exposed in the model
     */
    currency?: string
    /**
     * Gets the id of the applicant associated to the offer
     */
    applicantId?: string
    /**
     * Gets the id of the property associated to the offer
     */
    propertyId?: string
    /**
     * Gets the id of the negotiator associated to the offer
     */
    negotiatorId?: string
    /**
     * Gets the date the offer was made
     */
    date?: string // date-time
    /**
     * Gets the amount the offer was for
     */
    amount?: number // double
    /**
     * Gets the status of the offer
     */
    status?: string
    /**
     * Gets the requested inclusions of the offer
     */
    inclusions?: string
    /**
     * Gets the requested exclusions of the offer
     */
    exclusions?: string
    /**
     * Gets the conditions of the offer
     */
    conditions?: string
    /**
     * Gets a collection of contact entities attached to this offer
     * The primary contact will always appear first in the collection
     */
    related?: {
      /**
       * Gets the unique identifier of the contact
       */
      id?: string
      /**
       * Gets the name of this contact or company
       */
      name?: string
      /**
       * Gets the type of this contact (contact/company)
       */
      type?: string
      /**
       * The home phone number of the contact
       */
      homePhone?: string
      /**
       * The work phone number of the contact
       */
      workPhone?: string
      /**
       * The mobile phone number of the contact
       */
      mobilePhone?: string
      /**
       * The email address of the contact
       */
      email?: string
      /**
       * Gets the primary address of the contact
       */
      primaryAddress?: {
        /**
         * Gets the building name
         */
        buildingName?: string
        /**
         * Gets the building number
         */
        buildingNumber?: string
        /**
         * Gets the first line of the address
         */
        line1?: string
        /**
         * Gets the second line of the address
         */
        line2?: string
        /**
         * Gets the third line of the address
         */
        line3?: string
        /**
         * Gets the fourth line of the address
         */
        line4?: string
        /**
         * Gets the postcode
         */
        postcode?: string
        /**
         * Gets the ISO-3166 country code associated with the address
         */
        countryId?: string
      }
      readonly _links?: {
        [name: string]: {
          href?: string
        }
      }
      readonly _embedded?: {
        [name: string]: any
      }
    }[]
    /**
     * Gets a listing of additional metadata that has been set against this offer
     */
    metadata?: {
      [name: string]: any
    }
    readonly _links?: {
      [name: string]: {
        href?: string
      }
    }
    readonly _embedded?: {
      [name: string]: any
    }
  }[]
  pageNumber?: number // int32
  pageSize?: number // int32
  pageCount?: number // int32
  totalCount?: number // int32
  _links?: {
    [name: string]: {
      href?: string
    }
  }
}
export interface PagedResultOfficeModel_ {
  _embedded?: {
    /**
     * Gets the unique identifier
     */
    id?: string
    /**
     * Gets the date and time that the office was created
     */
    created?: string // date-time
    /**
     * Gets the date and time that the office was last modified
     */
    modified?: string // date-time
    /**
     * Gets the name of the office
     */
    name?: string
    /**
     * Gets the manager of the office
     */
    manager?: string
    /**
     * Gets the address of the office
     */
    address?: {
      /**
       * Gets the type of address (primary/secondary/home/work/forwarding/company/previous)
       */
      type?: string
      /**
       * Gets the building name
       */
      buildingName?: string
      /**
       * Gets the building number
       */
      buildingNumber?: string
      /**
       * Gets the first line of the address
       */
      line1?: string
      /**
       * Gets the second line of the address
       */
      line2?: string
      /**
       * Gets the third line of the address
       */
      line3?: string
      /**
       * Gets the fourth line of the address
       */
      line4?: string
      /**
       * Gets the postcode
       */
      postcode?: string
      /**
       * Gets the ISO-3166 country code associated with the address
       */
      countryId?: string
    }
    /**
     * The work phone number of the office
     */
    workPhone?: string
    /**
     * The email address of the office
     */
    email?: string
    /**
     * Gets a listing of additional metadata that has been set against this office
     */
    metadata?: {
      [name: string]: any
    }
    readonly _links?: {
      [name: string]: {
        href?: string
      }
    }
    readonly _embedded?: {
      [name: string]: any
    }
  }[]
  pageNumber?: number // int32
  pageSize?: number // int32
  pageCount?: number // int32
  totalCount?: number // int32
  _links?: {
    [name: string]: {
      href?: string
    }
  }
}
export interface PagedResultPropertyImageModel_ {
  _embedded?: {
    /**
     * Gets the unique id of the image (also the filename)
     */
    id?: string
    /**
     * Gets the datetime of when the property image was created
     */
    created?: string // date-time
    /**
     * Gets the datetime of when the property image was last modified
     */
    modified?: string // date-time
    /**
     * The unique identifier for the property the image is linked to
     */
    propertyId?: string
    /**
     * Gets the Url where the image is located
     */
    url?: string
    /**
     * Gets the caption of the image
     */
    caption?: string
    /**
     * Gets the type of the image (picture/floorPlan/epc/map)
     */
    type?: string
    /**
     * Gets this images order (ascending)
     */
    order?: number // int32
    readonly _links?: {
      [name: string]: {
        href?: string
      }
    }
    readonly _embedded?: {
      [name: string]: any
    }
  }[]
  pageNumber?: number // int32
  pageSize?: number // int32
  pageCount?: number // int32
  totalCount?: number // int32
  _links?: {
    [name: string]: {
      href?: string
    }
  }
}
export interface PagedResultPropertyModel_ {
  _embedded?: {
    /**
     * Gets the unique identifier
     */
    id?: string
    /**
     * Gets the datetime when the property was created
     */
    created?: string // date-time
    /**
     * Gets the date and time that the property was last modified
     */
    modified?: string // date-time
    /**
     * Gets the marketing mode of the property (selling/letting/sellingAndLetting)
     */
    marketingMode?: string
    /**
     * Gets the currency that applies to monetary amounts exposed in the model
     */
    currency?: string
    /**
     * Gets the address of the property
     */
    address?: {
      /**
       * Gets the building name
       */
      buildingName?: string
      /**
       * Gets the building number
       */
      buildingNumber?: string
      /**
       * Gets the first line of the address
       */
      line1?: string
      /**
       * Gets the second line of the address
       */
      line2?: string
      /**
       * Gets the third line of the address
       */
      line3?: string
      /**
       * Gets the fourth line of the address
       */
      line4?: string
      /**
       * Gets the postcode
       */
      postcode?: string
      /**
       * Gets the ISO-3166 country code associated with the address
       */
      country?: string
      /**
       * Gets the geolocation of the address
       */
      geolocation?: {
        /**
         * The latitude coordinate of the coordinate pair
         */
        latitude?: number // double
        /**
         * The longitude coordinate of the coordinate pair
         */
        longitude?: number // double
      }
    }
    /**
     * The unique identifier of the area that the property resides in
     */
    areaId?: string
    /**
     * Gets the strapline description
     */
    strapline?: string
    /**
     * Gets the brief description
     */
    description?: string
    /**
     * Gets the summary of accommodation
     */
    summary?: string
    /**
     * Gets the department id
     */
    departmentId?: string
    /**
     * Gets the properties negotiatior id
     */
    negotiatorId?: string
    /**
     * Gets the number of bedrooms
     */
    bedrooms?: number // int32
    /**
     * Gets the number of reception rooms
     */
    receptions?: number // int32
    /**
     * Gets the number of bathrooms
     */
    bathrooms?: number // int32
    /**
     * Gets the council tax banding (A/B/C/D/E/F/G/H)
     */
    councilTax?: string
    /**
     * Gets a value indicating whether this property can be advertised on the internet
     */
    internetAdvertising?: boolean
    /**
     * The arrangements regarding viewing the property
     */
    viewingArrangements?: string
    /**
     * Gets details of the external land area associated to this property
     */
    externalArea?: {
      /**
       * Gets the unit of area (acres/hectares)
       */
      type?: string
      /**
       * Gets the minimum area bound
       */
      min?: number // double
      /**
       * Gets the maximum area bound
       */
      max?: number // double
    }
    /**
     * Gets details of the internal dimensions of the property
     */
    internalArea?: {
      /**
       * Gets the unit of area (squareFeet/squareMetres)
       */
      type?: string
      /**
       * Gets the minimum area bound
       */
      min?: number // double
      /**
       * Gets the maximum area bound
       */
      max?: number // double
    }
    /**
     * Gets details of the EPC statistics
     */
    epc?: {
      /**
       * Gets whether this property is exempt from requiring an EPC
       */
      exempt?: boolean
      /**
       * Gets the current energy efficienty rating
       */
      eer?: number // int32
      /**
       * Gets the potential energy efficienty rating
       */
      eerPotential?: number // int32
      /**
       * Gets the current environmental impact rating
       */
      eir?: number // int32
      /**
       * Gets the potential environmental impact rating
       */
      eirPotential?: number // int32
    }
    /**
     * Gets the sales specific details of the property
     */
    selling?: {
      /**
       * Gets the date that the property was flagged as for sale
       */
      instructed?: string // date-time
      /**
       * Gets the asking price of the property
       */
      price?: number // int32
      /**
       * Gets the price qualifier (askingPrice/priceOnApplication/guidePrice/offersInRegion/offersOver/offersInExcess/fixedPrice/priceReducedTo)
       */
      qualifier?: string
      /**
       * Gets the sales status (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn)
       */
      status?: string
      /**
       * Gets details of the sales tenure of the property
       */
      tenure?: {
        /**
         * Gets the type of tenure that applies to this property
         */
        type?: string
        /**
         * Gets tenure expiration date
         */
        expiry?: string // date-time
      }
      /**
       * Gets the unique identifier of the vendor selling this property
       */
      vendorId?: string
    }
    /**
     * Gets the lettings specific details of the property
     */
    letting?: {
      /**
       * Gets the date that the property was flagged as for let
       */
      instructed?: string // date-time
      /**
       * Gets the date this property is next available from
       */
      availableFrom?: string // date-time
      /**
       * Gets the date this property is available to
       */
      availableTo?: string // date-time
      /**
       * Gets the monetary amount required to rent this property
       */
      rent?: number // double
      /**
       * Gets the rent collection frequency (weekly/monthly/yearly)
       */
      rentFrequency?: string
      /**
       * Gets the acceptable letting terms (short/long/any)
       */
      term?: string
      /**
       * Gets the id of the letting status of this property (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn)
       */
      status?: string
      /**
       * Gets the unique identifier of the landlord letting this property
       */
      landlordId?: string
    }
    /**
     * Gets the property types
     */
    type?: string[]
    /**
     * Gets the property style
     */
    style?: string[]
    /**
     * Gets the property situation
     */
    situation?: string[]
    /**
     * Gets the property parking
     */
    parking?: string[]
    /**
     * Gets the property age
     */
    age?: string[]
    /**
     * Gets the property locality
     */
    locality?: string[]
    /**
     * Gets a listing of room details
     */
    rooms?: {
      /**
       * Gets the name of the room
       */
      name?: string
      /**
       * Gets details on the dimension of the room
       */
      dimensions?: string
      /**
       * Gets a short description of the room
       */
      description?: string
    }[]
    /**
     * Gets the properties office ids
     */
    officeIds?: string[]
    /**
     * Gets a listing of additional metadata that has been set against this property
     */
    metadata?: {
      [name: string]: any
    }
    readonly _links?: {
      [name: string]: {
        href?: string
      }
    }
    readonly _embedded?: {
      [name: string]: any
    }
  }[]
  pageNumber?: number // int32
  pageSize?: number // int32
  pageCount?: number // int32
  totalCount?: number // int32
  _links?: {
    [name: string]: {
      href?: string
    }
  }
}
export interface PagedResultSourceModel_ {
  _embedded?: {
    /**
     * Gets the sources unique identifier
     */
    id?: string
    /**
     * Gets the date and time that the source was created
     */
    created?: string // date-time
    /**
     * Gets the date and time that the source was last modified
     */
    modified?: string // date-time
    /**
     * Gets the sources name
     */
    name?: string
    /**
     * Gets the sources type
     */
    type?: string
    /**
     * Gets the sources office ids
     */
    officeIds?: string[]
    /**
     * Gets the sources department ids
     */
    departmentIds?: string[]
    readonly _links?: {
      [name: string]: {
        href?: string
      }
    }
    readonly _embedded?: {
      [name: string]: any
    }
  }[]
  pageNumber?: number // int32
  pageSize?: number // int32
  pageCount?: number // int32
  totalCount?: number // int32
  _links?: {
    [name: string]: {
      href?: string
    }
  }
}
export interface PagedResultTaskModel_ {
  _embedded?: {
    /**
     * Gets the unique identifier of the task
     */
    id?: string
    /**
     * Gets the date the task was created
     */
    created?: string // date-time
    /**
     * Gets the date the task was modified
     */
    modified?: string // date-time
    /**
     * Gets the date the task was activated
     */
    activated?: string // date-time
    /**
     * Gets the date the task was completed
     */
    completed?: string // date-time
    /**
     * Gets the type of task
     */
    typeId?: string
    /**
     * Gets the unique identifier of the negotiator who created the task
     */
    senderId?: string
    /**
     * Gets the text against the task or message
     */
    text?: string
    /**
     * Gets the unique identifier of the landlord the task is related too
     */
    landlordId?: string
    /**
     * Gets the unique identifier of the property the task is related too
     */
    propertyId?: string
    /**
     * Gets the unique identifier of the applicant the task is related too
     */
    applicantId?: string
    /**
     * Gets the unique identifier of the tenancy the task is related too
     */
    tenancyId?: string
    /**
     * Gets the unique identifier of the contact the task is related too
     */
    contactId?: string
    /**
     * Gets the recipients of this task
     */
    recipients?: {
      /**
       * Unique identifier of the tasks recipient
       */
      id?: string
      /**
       * Entity type of the recipient (office/negotiator)
       */
      type?: string
    }[]
    /**
     * Gets a listing of additional metadata that has been set against this task
     */
    metadata?: {
      [name: string]: any
    }
    readonly _links?: {
      [name: string]: {
        href?: string
      }
    }
    readonly _embedded?: {
      [name: string]: any
    }
  }[]
  pageNumber?: number // int32
  pageSize?: number // int32
  pageCount?: number // int32
  totalCount?: number // int32
  _links?: {
    [name: string]: {
      href?: string
    }
  }
}
export interface PagedResultVendorModel_ {
  _embedded?: {
    /**
     * Gets the vendors unique identfier
     */
    id?: string
    /**
     * Gets the datetime when the vendor was created
     */
    created?: string // date-time
    /**
     * Gets the date and time that the vendor was last modified
     */
    modified?: string // date-time
    /**
     * Gets the date and time that the vendor was last called
     */
    lastCall?: string // date-time
    /**
     * Gets the date and time that the vendor will be called next
     */
    nextCall?: string // date-time
    /**
     * Gets the type of vendor
     */
    typeId?: string
    /**
     * Gets the vendors reason for selling
     */
    sellingReasonId?: string
    /**
     * Gets the unique identifier of the vendors solicitor
     */
    solicitorId?: string
    /**
     * Gets the vendors source information
     */
    source?: {
      /**
       * Gets the unique identifier of the vendors source
       */
      id?: string
      /**
       * Gets the vendors source type (office/source)
       */
      type?: string
      readonly _links?: {
        [name: string]: {
          href?: string
        }
      }
      readonly _embedded?: {
        [name: string]: any
      }
    }
    /**
     * Gets a collection of contact entities attached to this vendor
     * The primary contact will always appear first in the collection
     */
    related?: {
      /**
       * Gets the unique identifier of the contact
       */
      id?: string
      /**
       * Gets the name of this contact or company
       */
      name?: string
      /**
       * Gets the type of this contact (Contact/Company)
       */
      type?: string
      /**
       * The home phone number of the contact
       */
      homePhone?: string
      /**
       * The work phone number of the contact
       */
      workPhone?: string
      /**
       * The mobile phone number of the contact
       */
      mobilePhone?: string
      /**
       * The email address of the contact
       */
      email?: string
      /**
       * Gets the primary address of the contact
       */
      primaryAddress?: {
        /**
         * Gets the building name
         */
        buildingName?: string
        /**
         * Gets the building number
         */
        buildingNumber?: string
        /**
         * Gets the first line of the address
         */
        line1?: string
        /**
         * Gets the second line of the address
         */
        line2?: string
        /**
         * Gets the third line of the address
         */
        line3?: string
        /**
         * Gets the fourth line of the address
         */
        line4?: string
        /**
         * Gets the postcode
         */
        postcode?: string
        /**
         * Gets the ISO-3166 country code associated with the address
         */
        countryId?: string
      }
      readonly _links?: {
        [name: string]: {
          href?: string
        }
      }
      readonly _embedded?: {
        [name: string]: any
      }
    }[]
    /**
     * Gets the vendor's negotiator id
     */
    negotiatorId?: string
    /**
     * Gets the vendor's office ids
     */
    officeIds?: string[]
    /**
     * Gets a listing of additional metadata that has been set against this vendor
     */
    metadata?: {
      [name: string]: any
    }
    readonly _links?: {
      [name: string]: {
        href?: string
      }
    }
    readonly _embedded?: {
      [name: string]: any
    }
  }[]
  pageNumber?: number // int32
  pageSize?: number // int32
  pageCount?: number // int32
  totalCount?: number // int32
  _links?: {
    [name: string]: {
      href?: string
    }
  }
}
export interface PagedResultWorksOrderItemModel_ {
  _embedded?: {
    /**
     * Gets the unique identifier of the works order item
     */
    id?: string
    /**
     * Gets the unique identifier of the works order
     */
    worksOrderId?: string
    /**
     * Gets the datetime when the works order item was created
     */
    created?: string // date-time
    /**
     * Gets the date and time that the works order item was last modified
     */
    modified?: string // date-time
    /**
     * Gets the notes of the work order item
     */
    notes?: string
    /**
     * Gets the entity type to charge to (Landlord, Tenant)
     */
    chargeTo?: string
    /**
     * Gets the estimate of the work order item
     */
    estimate?: number // double
    /**
     * Gets the work order items estimate type (Agent, Verbal, Written)
     */
    estimateType?: string
    /**
     * Gets the cost of the work order item
     */
    cost?: number // double
    readonly _links?: {
      [name: string]: {
        href?: string
      }
    }
    readonly _embedded?: {
      [name: string]: any
    }
  }[]
  pageNumber?: number // int32
  pageSize?: number // int32
  pageCount?: number // int32
  totalCount?: number // int32
  _links?: {
    [name: string]: {
      href?: string
    }
  }
}
export interface PagedResultWorksOrderModel_ {
  _embedded?: {
    /**
     * Gets the unique identifier of the works order
     */
    id?: string
    /**
     * Gets the datetime when the works order was created
     */
    created?: string // date-time
    /**
     * Gets the date and time that the works order was last modified
     */
    modified?: string // date-time
    /**
     * Gets the id of the company that has been selected to perform the work
     */
    companyId?: string
    /**
     * Gets the id of the property the work is for
     */
    propertyId?: string
    /**
     * Gets the id of the tenancy that originated the work
     */
    tenancyId?: string
    /**
     * Gets the id of the negotiator that booked the work
     */
    negotiatorId?: string
    /**
     * Gets the id of the type of work that needs to be performed
     */
    typeId?: string
    /**
     * Gets the status of the works order
     */
    status?: string
    /**
     * Gets the description of the works order
     */
    description?: string
    /**
     * Gets the person who reported the fault
     */
    reporter?: string
    /**
     * Gets the date the works order was booked
     */
    booked?: string // date-time
    /**
     * Gets the date the works order is requried
     */
    required?: string // date-time
    /**
     * Gets the date the works order is completed
     */
    completed?: string // date-time
    /**
     * Gets the collection of work order items associated to the works order
     */
    items?: {
      /**
       * Gets the unique identifier of the works order item
       */
      id?: string
      /**
       * Gets the unique identifier of the works order
       */
      worksOrderId?: string
      /**
       * Gets the datetime when the works order item was created
       */
      created?: string // date-time
      /**
       * Gets the date and time that the works order item was last modified
       */
      modified?: string // date-time
      /**
       * Gets the notes of the work order item
       */
      notes?: string
      /**
       * Gets the entity type to charge to (Landlord, Tenant)
       */
      chargeTo?: string
      /**
       * Gets the estimate of the work order item
       */
      estimate?: number // double
      /**
       * Gets the work order items estimate type (Agent, Verbal, Written)
       */
      estimateType?: string
      /**
       * Gets the cost of the work order item
       */
      cost?: number // double
      readonly _links?: {
        [name: string]: {
          href?: string
        }
      }
      readonly _embedded?: {
        [name: string]: any
      }
    }[]
    /**
     * Gets a listing of additional metadata that has been set against this works order
     */
    metadata?: {
      [name: string]: any
    }
    readonly _links?: {
      [name: string]: {
        href?: string
      }
    }
    readonly _embedded?: {
      [name: string]: any
    }
  }[]
  pageNumber?: number // int32
  pageSize?: number // int32
  pageCount?: number // int32
  totalCount?: number // int32
  _links?: {
    [name: string]: {
      href?: string
    }
  }
}
export interface PagingLinkModel {
  href?: string
}
export interface ProblemDetails {
  [name: string]: any
  type?: string
  title?: string
  status?: number // int32
  detail?: string
  instance?: string
}
/**
 * Model representing the physical address of a building or premise
 */
export interface PropertyAddressModel {
  /**
   * Gets the building name
   */
  buildingName?: string
  /**
   * Gets the building number
   */
  buildingNumber?: string
  /**
   * Gets the first line of the address
   */
  line1?: string
  /**
   * Gets the second line of the address
   */
  line2?: string
  /**
   * Gets the third line of the address
   */
  line3?: string
  /**
   * Gets the fourth line of the address
   */
  line4?: string
  /**
   * Gets the postcode
   */
  postcode?: string
  /**
   * Gets the ISO-3166 country code associated with the address
   */
  country?: string
  /**
   * Gets the geolocation of the address
   */
  geolocation?: {
    /**
     * The latitude coordinate of the coordinate pair
     */
    latitude?: number // double
    /**
     * The longitude coordinate of the coordinate pair
     */
    longitude?: number // double
  }
}
/**
 * A model to represent the details of an EPC graph
 */
export interface PropertyEpcModel {
  /**
   * Gets whether this property is exempt from requiring an EPC
   */
  exempt?: boolean
  /**
   * Gets the current energy efficienty rating
   */
  eer?: number // int32
  /**
   * Gets the potential energy efficienty rating
   */
  eerPotential?: number // int32
  /**
   * Gets the current environmental impact rating
   */
  eir?: number // int32
  /**
   * Gets the potential environmental impact rating
   */
  eirPotential?: number // int32
}
/**
 * A model to represent external area of a propeerty
 */
export interface PropertyExternalAreaModel {
  /**
   * Gets the unit of area (acres/hectares)
   */
  type?: string
  /**
   * Gets the minimum area bound
   */
  min?: number // double
  /**
   * Gets the maximum area bound
   */
  max?: number // double
}
/**
 * Model representing the geographical location of an address using coordinates
 */
export interface PropertyGeolocationModel {
  /**
   * The latitude coordinate of the coordinate pair
   */
  latitude?: number // double
  /**
   * The longitude coordinate of the coordinate pair
   */
  longitude?: number // double
}
/**
 * Response model for property image details
 */
export interface PropertyImageModel {
  /**
   * Gets the unique id of the image (also the filename)
   */
  id?: string
  /**
   * Gets the datetime of when the property image was created
   */
  created?: string // date-time
  /**
   * Gets the datetime of when the property image was last modified
   */
  modified?: string // date-time
  /**
   * The unique identifier for the property the image is linked to
   */
  propertyId?: string
  /**
   * Gets the Url where the image is located
   */
  url?: string
  /**
   * Gets the caption of the image
   */
  caption?: string
  /**
   * Gets the type of the image (picture/floorPlan/epc/map)
   */
  type?: string
  /**
   * Gets this images order (ascending)
   */
  order?: number // int32
  readonly _links?: {
    [name: string]: {
      href?: string
    }
  }
  readonly _embedded?: {
    [name: string]: any
  }
}
/**
 * A model to represent internal area of a propeerty
 */
export interface PropertyInternalAreaModel {
  /**
   * Gets the unit of area (squareFeet/squareMetres)
   */
  type?: string
  /**
   * Gets the minimum area bound
   */
  min?: number // double
  /**
   * Gets the maximum area bound
   */
  max?: number // double
}
/**
 * Model to represent the property details specific to lettings marketing
 */
export interface PropertyLettingModel {
  /**
   * Gets the date that the property was flagged as for let
   */
  instructed?: string // date-time
  /**
   * Gets the date this property is next available from
   */
  availableFrom?: string // date-time
  /**
   * Gets the date this property is available to
   */
  availableTo?: string // date-time
  /**
   * Gets the monetary amount required to rent this property
   */
  rent?: number // double
  /**
   * Gets the rent collection frequency (weekly/monthly/yearly)
   */
  rentFrequency?: string
  /**
   * Gets the acceptable letting terms (short/long/any)
   */
  term?: string
  /**
   * Gets the id of the letting status of this property (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn)
   */
  status?: string
  /**
   * Gets the unique identifier of the landlord letting this property
   */
  landlordId?: string
}
/**
 * Model representing the details of a property
 */
export interface PropertyModel {
  /**
   * Gets the unique identifier
   */
  id?: string
  /**
   * Gets the datetime when the property was created
   */
  created?: string // date-time
  /**
   * Gets the date and time that the property was last modified
   */
  modified?: string // date-time
  /**
   * Gets the marketing mode of the property (selling/letting/sellingAndLetting)
   */
  marketingMode?: string
  /**
   * Gets the currency that applies to monetary amounts exposed in the model
   */
  currency?: string
  /**
   * Gets the address of the property
   */
  address?: {
    /**
     * Gets the building name
     */
    buildingName?: string
    /**
     * Gets the building number
     */
    buildingNumber?: string
    /**
     * Gets the first line of the address
     */
    line1?: string
    /**
     * Gets the second line of the address
     */
    line2?: string
    /**
     * Gets the third line of the address
     */
    line3?: string
    /**
     * Gets the fourth line of the address
     */
    line4?: string
    /**
     * Gets the postcode
     */
    postcode?: string
    /**
     * Gets the ISO-3166 country code associated with the address
     */
    country?: string
    /**
     * Gets the geolocation of the address
     */
    geolocation?: {
      /**
       * The latitude coordinate of the coordinate pair
       */
      latitude?: number // double
      /**
       * The longitude coordinate of the coordinate pair
       */
      longitude?: number // double
    }
  }
  /**
   * The unique identifier of the area that the property resides in
   */
  areaId?: string
  /**
   * Gets the strapline description
   */
  strapline?: string
  /**
   * Gets the brief description
   */
  description?: string
  /**
   * Gets the summary of accommodation
   */
  summary?: string
  /**
   * Gets the department id
   */
  departmentId?: string
  /**
   * Gets the properties negotiatior id
   */
  negotiatorId?: string
  /**
   * Gets the number of bedrooms
   */
  bedrooms?: number // int32
  /**
   * Gets the number of reception rooms
   */
  receptions?: number // int32
  /**
   * Gets the number of bathrooms
   */
  bathrooms?: number // int32
  /**
   * Gets the council tax banding (A/B/C/D/E/F/G/H)
   */
  councilTax?: string
  /**
   * Gets a value indicating whether this property can be advertised on the internet
   */
  internetAdvertising?: boolean
  /**
   * The arrangements regarding viewing the property
   */
  viewingArrangements?: string
  /**
   * Gets details of the external land area associated to this property
   */
  externalArea?: {
    /**
     * Gets the unit of area (acres/hectares)
     */
    type?: string
    /**
     * Gets the minimum area bound
     */
    min?: number // double
    /**
     * Gets the maximum area bound
     */
    max?: number // double
  }
  /**
   * Gets details of the internal dimensions of the property
   */
  internalArea?: {
    /**
     * Gets the unit of area (squareFeet/squareMetres)
     */
    type?: string
    /**
     * Gets the minimum area bound
     */
    min?: number // double
    /**
     * Gets the maximum area bound
     */
    max?: number // double
  }
  /**
   * Gets details of the EPC statistics
   */
  epc?: {
    /**
     * Gets whether this property is exempt from requiring an EPC
     */
    exempt?: boolean
    /**
     * Gets the current energy efficienty rating
     */
    eer?: number // int32
    /**
     * Gets the potential energy efficienty rating
     */
    eerPotential?: number // int32
    /**
     * Gets the current environmental impact rating
     */
    eir?: number // int32
    /**
     * Gets the potential environmental impact rating
     */
    eirPotential?: number // int32
  }
  /**
   * Gets the sales specific details of the property
   */
  selling?: {
    /**
     * Gets the date that the property was flagged as for sale
     */
    instructed?: string // date-time
    /**
     * Gets the asking price of the property
     */
    price?: number // int32
    /**
     * Gets the price qualifier (askingPrice/priceOnApplication/guidePrice/offersInRegion/offersOver/offersInExcess/fixedPrice/priceReducedTo)
     */
    qualifier?: string
    /**
     * Gets the sales status (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn)
     */
    status?: string
    /**
     * Gets details of the sales tenure of the property
     */
    tenure?: {
      /**
       * Gets the type of tenure that applies to this property
       */
      type?: string
      /**
       * Gets tenure expiration date
       */
      expiry?: string // date-time
    }
    /**
     * Gets the unique identifier of the vendor selling this property
     */
    vendorId?: string
  }
  /**
   * Gets the lettings specific details of the property
   */
  letting?: {
    /**
     * Gets the date that the property was flagged as for let
     */
    instructed?: string // date-time
    /**
     * Gets the date this property is next available from
     */
    availableFrom?: string // date-time
    /**
     * Gets the date this property is available to
     */
    availableTo?: string // date-time
    /**
     * Gets the monetary amount required to rent this property
     */
    rent?: number // double
    /**
     * Gets the rent collection frequency (weekly/monthly/yearly)
     */
    rentFrequency?: string
    /**
     * Gets the acceptable letting terms (short/long/any)
     */
    term?: string
    /**
     * Gets the id of the letting status of this property (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn)
     */
    status?: string
    /**
     * Gets the unique identifier of the landlord letting this property
     */
    landlordId?: string
  }
  /**
   * Gets the property types
   */
  type?: string[]
  /**
   * Gets the property style
   */
  style?: string[]
  /**
   * Gets the property situation
   */
  situation?: string[]
  /**
   * Gets the property parking
   */
  parking?: string[]
  /**
   * Gets the property age
   */
  age?: string[]
  /**
   * Gets the property locality
   */
  locality?: string[]
  /**
   * Gets a listing of room details
   */
  rooms?: {
    /**
     * Gets the name of the room
     */
    name?: string
    /**
     * Gets details on the dimension of the room
     */
    dimensions?: string
    /**
     * Gets a short description of the room
     */
    description?: string
  }[]
  /**
   * Gets the properties office ids
   */
  officeIds?: string[]
  /**
   * Gets a listing of additional metadata that has been set against this property
   */
  metadata?: {
    [name: string]: any
  }
  readonly _links?: {
    [name: string]: {
      href?: string
    }
  }
  readonly _embedded?: {
    [name: string]: any
  }
}
/**
 * Model representing a room in a property
 */
export interface PropertyRoomModel {
  /**
   * Gets the name of the room
   */
  name?: string
  /**
   * Gets details on the dimension of the room
   */
  dimensions?: string
  /**
   * Gets a short description of the room
   */
  description?: string
}
/**
 * Model to represent the property details specific to sales marketing
 */
export interface PropertySellingModel {
  /**
   * Gets the date that the property was flagged as for sale
   */
  instructed?: string // date-time
  /**
   * Gets the asking price of the property
   */
  price?: number // int32
  /**
   * Gets the price qualifier (askingPrice/priceOnApplication/guidePrice/offersInRegion/offersOver/offersInExcess/fixedPrice/priceReducedTo)
   */
  qualifier?: string
  /**
   * Gets the sales status (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn)
   */
  status?: string
  /**
   * Gets details of the sales tenure of the property
   */
  tenure?: {
    /**
     * Gets the type of tenure that applies to this property
     */
    type?: string
    /**
     * Gets tenure expiration date
     */
    expiry?: string // date-time
  }
  /**
   * Gets the unique identifier of the vendor selling this property
   */
  vendorId?: string
}
/**
 * Model representing the sales tenure of a property
 */
export interface PropertyTenureModel {
  /**
   * Gets the type of tenure that applies to this property
   */
  type?: string
  /**
   * Gets tenure expiration date
   */
  expiry?: string // date-time
}
/**
 * Model to display a tasks recipient
 */
export interface RecipientModel {
  /**
   * Unique identifier of the tasks recipient
   */
  id?: string
  /**
   * Entity type of the recipient (office/negotiator)
   */
  type?: string
}
export interface SourceModel {
  /**
   * Gets the sources unique identifier
   */
  id?: string
  /**
   * Gets the date and time that the source was created
   */
  created?: string // date-time
  /**
   * Gets the date and time that the source was last modified
   */
  modified?: string // date-time
  /**
   * Gets the sources name
   */
  name?: string
  /**
   * Gets the sources type
   */
  type?: string
  /**
   * Gets the sources office ids
   */
  officeIds?: string[]
  /**
   * Gets the sources department ids
   */
  departmentIds?: string[]
  readonly _links?: {
    [name: string]: {
      href?: string
    }
  }
  readonly _embedded?: {
    [name: string]: any
  }
}
export interface StringSegment {
  readonly buffer?: string
  readonly offset?: number // int32
  readonly length?: number // int32
  readonly value?: string
  readonly hasValue?: boolean
}
/**
 * Outward facing model to display task details
 */
export interface TaskModel {
  /**
   * Gets the unique identifier of the task
   */
  id?: string
  /**
   * Gets the date the task was created
   */
  created?: string // date-time
  /**
   * Gets the date the task was modified
   */
  modified?: string // date-time
  /**
   * Gets the date the task was activated
   */
  activated?: string // date-time
  /**
   * Gets the date the task was completed
   */
  completed?: string // date-time
  /**
   * Gets the type of task
   */
  typeId?: string
  /**
   * Gets the unique identifier of the negotiator who created the task
   */
  senderId?: string
  /**
   * Gets the text against the task or message
   */
  text?: string
  /**
   * Gets the unique identifier of the landlord the task is related too
   */
  landlordId?: string
  /**
   * Gets the unique identifier of the property the task is related too
   */
  propertyId?: string
  /**
   * Gets the unique identifier of the applicant the task is related too
   */
  applicantId?: string
  /**
   * Gets the unique identifier of the tenancy the task is related too
   */
  tenancyId?: string
  /**
   * Gets the unique identifier of the contact the task is related too
   */
  contactId?: string
  /**
   * Gets the recipients of this task
   */
  recipients?: {
    /**
     * Unique identifier of the tasks recipient
     */
    id?: string
    /**
     * Entity type of the recipient (office/negotiator)
     */
    type?: string
  }[]
  /**
   * Gets a listing of additional metadata that has been set against this task
   */
  metadata?: {
    [name: string]: any
  }
  readonly _links?: {
    [name: string]: {
      href?: string
    }
  }
  readonly _embedded?: {
    [name: string]: any
  }
}
/**
 * The details specific to applicants with a marketingMode of buying
 */
export interface UpdateApplicantBuyingModel {
  /**
   * The lower bound of the applicant's budget
   */
  priceFrom?: number // int32
  /**
   * The upper bound of the applicant's budget
   */
  priceTo?: number // int32
}
/**
 * The applicant's outdoor space requirements
 */
export interface UpdateApplicantExternalAreaModel {
  /**
   * The unit of area that each amount corresponds to (acres/hectares)
   */
  type?: string
  /**
   * The minimum unit value of outside space that the applicant is looking for
   */
  amountFrom?: number // double
  /**
   * The maximum unit value of outside space that the applicant is looking for
   */
  amountTo?: number // double
}
/**
 * The applicant's indoor space requirements
 */
export interface UpdateApplicantInternalAreaModel {
  /**
   * The unit of area that each amount corresponds to (squareFeet/squareMetres)
   */
  type?: string
  /**
   * The unit value of inside space that the applicant is looking for
   */
  amount?: number // double
}
/**
 * Representation of an applicant
 */
export interface UpdateApplicantModel {
  /**
   * Sets the marketing mode relating to the buyer (buying / renting)
   */
  marketingMode?: string
  /**
   * Sets a flag determining whether or not the applicant is actively looking for property
   */
  active?: boolean
  /**
   * Gets the applicant requirement notes
   */
  notes?: string
  /**
   * Sets the date and time that the applicant was last contacted
   */
  lastCall?: string // date-time
  /**
   * Sets the date and time that the applicant is next due to be contacted
   */
  nextCall?: string // date-time
  /**
   * Sets the id of the department that the applicant requirements are associated with
   */
  departmentId?: string
  /**
   * Sets the unique idenfitier of the applicants solicitor
   */
  solicitorId?: string
  /**
   * Sets the property type requirements
   */
  type?: string[]
  /**
   * Sets the property style requirements
   */
  style?: string[]
  /**
   * Sets the property situation requirements
   */
  situation?: string[]
  /**
   * Sets the property parking requirements
   */
  parking?: string[]
  /**
   * Sets the property age requirements
   */
  age?: string[]
  /**
   * Sets the property locality requirements
   */
  locality?: string[]
  /**
   * Sets the minimum number of bedrooms the applicant requires
   */
  bedroomsMin?: number // int32
  /**
   * Sets the maximum number of bedrooms the applicant requires
   */
  bedroomsMax?: number // int32
  /**
   * Sets the minimum number of reception rooms the applicant requires
   */
  receptionsMin?: number // int32
  /**
   * Sets the maximum number of reception rooms the applicant requires
   */
  receptionsMax?: number // int32
  /**
   * Sets the minimum number of bathrooms the applicant requires
   */
  bathroomsMin?: number // int32
  /**
   * Sets the maximum number of bathrooms the applicant requires
   */
  bathroomsMax?: number // int32
  /**
   * Sets the applicants location type (areas/addresses/none)
   */
  locationType?: string
  /**
   * Sets the applicants location options
   */
  locationOptions?: string[]
  /**
   * Sets the sales specific requirements, if the applicant is looking to buy
   */
  selling?: {
    /**
     * The lower bound of the applicant's budget
     */
    priceFrom?: number // int32
    /**
     * The upper bound of the applicant's budget
     */
    priceTo?: number // int32
  }
  /**
   * Sets the letting specific requirements, if the applicant is looking to rent
   */
  letting?: {
    /**
     * The date the applicant is looking to move to a new property
     */
    moveDate?: string // date-time
    /**
     * The applicant's preferred letting term (long/short/any)
     */
    term?: string
    /**
     * The lower bound of the applicant's budget
     */
    rentFrom?: number // double
    /**
     * The upper bound of the applicant's budget
     */
    rentTo?: number // double
    /**
     * The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually)
     */
    rentFrequency?: string
    /**
     * Sets the applicants furnishing requirements
     */
    furnishing?: string[]
  }
  /**
   * Sets the applicant's external area requirements
   */
  externalArea?: {
    /**
     * The unit of area that each amount corresponds to (acres/hectares)
     */
    type?: string
    /**
     * The minimum unit value of outside space that the applicant is looking for
     */
    amountFrom?: number // double
    /**
     * The maximum unit value of outside space that the applicant is looking for
     */
    amountTo?: number // double
  }
  /**
   * Sets the applicant's internal area requirements
   */
  internalArea?: {
    /**
     * The unit of area that each amount corresponds to (squareFeet/squareMetres)
     */
    type?: string
    /**
     * The unit value of inside space that the applicant is looking for
     */
    amount?: number // double
  }
  /**
   * Sets the applicants source
   */
  source?: {
    /**
     * Sets the unique identifier of the applicants source
     */
    id?: string
    /**
     * Sets the applicants source type
     */
    type?: string
  }
  /**
   * Sets a collection of office ids that are related to this applicant
   */
  officeIds?: string[]
  /**
   * Sets a collection of negotiator ids that are related to this applicant
   */
  negotiatorIds?: string[]
  /**
   * Sets a JSON fragment to attach to this applicant as metadata
   */
  metadata?: {
    [name: string]: any
  }
}
/**
 * The details specific to applicants with a marketingMode of renting
 */
export interface UpdateApplicantRentingModel {
  /**
   * The date the applicant is looking to move to a new property
   */
  moveDate?: string // date-time
  /**
   * The applicant's preferred letting term (long/short/any)
   */
  term?: string
  /**
   * The lower bound of the applicant's budget
   */
  rentFrom?: number // double
  /**
   * The upper bound of the applicant's budget
   */
  rentTo?: number // double
  /**
   * The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually)
   */
  rentFrequency?: string
  /**
   * Sets the applicants furnishing requirements
   */
  furnishing?: string[]
}
/**
 * Model used for creating a applicants source
 */
export interface UpdateApplicantSourceModel {
  /**
   * Sets the unique identifier of the applicants source
   */
  id?: string
  /**
   * Sets the applicants source type
   */
  type?: string
}
/**
 * Model to update an attendee on an appointment
 */
export interface UpdateAppointmentAttendeeModel {
  /**
   * Sets the identifier of the attendee
   */
  id?: string
  /**
   * Sets the type of attendee
   */
  type?: string
  /**
   * Flag denoting whether or not the attendee has confirmed their attendance to the appointment
   */
  confirmed?: boolean
}
/**
 * Model used to update the follow up information on a single appointment
 */
export interface UpdateAppointmentFollowUpModel {
  /**
   * Sets the unique identifier of a pre-defined follow up response type
   */
  responseId?: string
  /**
   * Sets the internal follow up notes to be stored against the appointment
   */
  notes?: string
}
/**
 * Model required to update a calendar entry
 */
export interface UpdateAppointmentModel {
  /**
   * Sets the date and time that the appointment will start
   */
  start?: string // date-time
  /**
   * Sets the date and time that the appointment will end
   */
  end?: string // date-time
  /**
   * Sets the type of appointment
   */
  typeId?: string
  /**
   * Sets the date that the appointment should be followed up on
   */
  followUpOn?: string // date-time
  /**
   * Sets the appointment description
   */
  description?: string
  /**
   * Sets the property identifier that the appointment takes place at
   */
  propertyId?: string
  /**
   * Sets the id of the person that organised the appointment
   */
  organiserId?: string
  /**
   * Sets the flag that determines if this appointment is cancelled
   */
  cancelled?: boolean
  /**
   * Sets the negotiator ids to link the appointment too.
   */
  negotiatorIds?: string[]
  /**
   * Sets the office ids to link the appointment too.
   */
  officeIds?: string[]
  /**
   * Sets the details of the attendee of the appointment
   */
  attendee?: {
    /**
     * Sets the identifier of the attendee
     */
    id?: string
    /**
     * Sets the type of attendee
     */
    type?: string
    /**
     * Flag denoting whether or not the attendee has confirmed their attendance to the appointment
     */
    confirmed?: boolean
  }
  /**
   * Sets the flag to specify if the appointment is accompanied.
   */
  accompanied?: boolean
  /**
   * Sets the flag to specify if the negotiator is confirmed.
   */
  negotiatorConfirmed?: boolean
  /**
   * Sets the flag to specify if the attendee is confirmed.
   */
  attendeeConfirmed?: boolean
  /**
   * Sets the flag to specify if the property is confirmed.
   */
  propertyConfirmed?: boolean
  /**
   * Sets the details of the appointments follow up
   */
  followUp?: {
    /**
     * Sets the unique identifier of a pre-defined follow up response type
     */
    responseId?: string
    /**
     * Sets the internal follow up notes to be stored against the appointment
     */
    notes?: string
  }
  /**
   * Sets the recurrence pattern for this appointment
   */
  recurrence?: {
    /**
     * Sets the type of unit that the interval will apply to
     */
    type?: string
    /**
     * Sets the numeric value for often this appointment will recur
     */
    interval?: number // int32
    /**
     * Sets the date this appointment will continue to recur until
     */
    until?: string // date-time
  }
  /**
   * Sets a JSON fragment to attach to this appointment as metadata
   */
  metadata?: {
    [name: string]: any
  }
}
/**
 * Model to update the recurrence details of an appointment
 */
export interface UpdateAppointmentRecurrenceModel {
  /**
   * Sets the type of unit that the interval will apply to
   */
  type?: string
  /**
   * Sets the numeric value for often this appointment will recur
   */
  interval?: number // int32
  /**
   * Sets the date this appointment will continue to recur until
   */
  until?: string // date-time
}
/**
 * Model to update an area
 */
export interface UpdateAreaModel {
  /**
   * Sets the areas name
   */
  name?: string
  /**
   * Sets the areas area information
   */
  area?: string[]
  /**
   * Sets the areas related deparments
   */
  departmentIds?: string[]
  /**
   * Sets the areas related offices
   */
  officeIds?: string[]
}
/**
 * Model to update a company address
 */
export interface UpdateCompanyAddressModel {
  /**
   * Sets the type of address (primary/secondary/home/work/forwarding/company/previous)
   */
  type?: string
  /**
   * Sets the building name
   */
  buildingName?: string
  /**
   * Sets the building number
   */
  buildingNumber?: string
  /**
   * Sets the first line of the address
   */
  line1?: string
  /**
   * Sets the second line of the address
   */
  line2?: string
  /**
   * Sets the third line of the address
   */
  line3?: string
  /**
   * Sets the fourth line of the address
   */
  line4?: string
  /**
   * Sets the postcode
   */
  postcode?: string
  /**
   * Sets the ISO-3166 country code associated with the address
   */
  countryId?: string
}
/**
 * Model to update a company
 */
export interface UpdateCompanyModel {
  /**
   * Sets the companies name
   */
  name?: string
  /**
   * Sets the companies branch
   */
  branch?: string
  /**
   * Sets the companies notes
   */
  notes?: string
  /**
   * Sets the active flag against the company
   */
  active?: boolean
  /**
   * Sets the vat registered flag against the company
   */
  vatRegistered?: boolean
  /**
   * Sets the companies list of type ids
   */
  typeIds?: string[]
  /**
   * Sets the supplier type id
   */
  supplierTypeId?: string
  /**
   * The work phone number of the company
   */
  workPhone?: string
  /**
   * The mobile phone number of the company
   */
  mobilePhone?: string
  /**
   * The email address of the company
   */
  email?: string
  /**
   * Sets the address of the company
   */
  address?: {
    /**
     * Sets the type of address (primary/secondary/home/work/forwarding/company/previous)
     */
    type?: string
    /**
     * Sets the building name
     */
    buildingName?: string
    /**
     * Sets the building number
     */
    buildingNumber?: string
    /**
     * Sets the first line of the address
     */
    line1?: string
    /**
     * Sets the second line of the address
     */
    line2?: string
    /**
     * Sets the third line of the address
     */
    line3?: string
    /**
     * Sets the fourth line of the address
     */
    line4?: string
    /**
     * Sets the postcode
     */
    postcode?: string
    /**
     * Sets the ISO-3166 country code associated with the address
     */
    countryId?: string
  }
  /**
   * Sets a collection of office ids that are related to this company
   */
  officeIds?: string[]
  /**
   * Sets a collection of negotiator ids that are related to this company
   */
  negotiatorIds?: string[]
  /**
   * Sets a JSON fragment to attach to this company as metadata
   */
  metadata?: {
    [name: string]: any
  }
}
/**
 * Model to update a contact address
 */
export interface UpdateContactAddressModel {
  /**
   * Sets the type of address (primary/secondary/home/work/forwarding/company/previous)
   */
  type?: string
  /**
   * Sets the building name
   */
  buildingName?: string
  /**
   * Sets the building number
   */
  buildingNumber?: string
  /**
   * Sets the first line of the address
   */
  line1?: string
  /**
   * Sets the second line of the address
   */
  line2?: string
  /**
   * Sets the third line of the address
   */
  line3?: string
  /**
   * Sets the fourth line of the address
   */
  line4?: string
  /**
   * Sets the postcode
   */
  postcode?: string
  /**
   * Sets the ISO-3166 country code associated with the address
   */
  countryId?: string
}
/**
 * Model to update a contact record
 */
export interface UpdateContactModel {
  /**
   * Sets the title of this contact (eg. Mr, Mrs, Miss, Dr)
   */
  title?: string
  /**
   * Sets the forename of this contact
   */
  forename?: string
  /**
   * Sets the surname of this contact
   */
  surname?: string
  /**
   * Sets the date of birth of this contact
   */
  dateOfBirth?: string // date-time
  /**
   * Sets a flag to indicate if this contact has been marked as active
   */
  active?: boolean
  /**
   * Sets the marketing consent status of this contact (grant/deny/notAsked)
   */
  marketingConsent?: string
  /**
   * Sets the contacts source
   */
  source?: {
    /**
     * Sets the unique identifier of the contacts source
     */
    id?: string
    /**
     * Sets the contacts source type
     */
    type?: string
  }
  /**
   * The home phone number of the contact
   */
  homePhone?: string
  /**
   * The work phone number of the contact
   */
  workPhone?: string
  /**
   * The mobile phone number of the contact
   */
  mobilePhone?: string
  /**
   * The email address of the contact
   */
  email?: string
  /**
   * Gets a collection of office ids that are related to this contact
   */
  officeIds?: string[]
  /**
   * Sets a collection of negotiator ids that are related to this contact
   */
  negotiatorIds?: string[]
  /**
   * Sets the contacts primary address
   */
  primaryAddress?: {
    /**
     * Sets the type of address (primary/secondary/home/work/forwarding/company/previous)
     */
    type?: string
    /**
     * Sets the building name
     */
    buildingName?: string
    /**
     * Sets the building number
     */
    buildingNumber?: string
    /**
     * Sets the first line of the address
     */
    line1?: string
    /**
     * Sets the second line of the address
     */
    line2?: string
    /**
     * Sets the third line of the address
     */
    line3?: string
    /**
     * Sets the fourth line of the address
     */
    line4?: string
    /**
     * Sets the postcode
     */
    postcode?: string
    /**
     * Sets the ISO-3166 country code associated with the address
     */
    countryId?: string
  }
  /**
   * Sets the contacts secondary address
   */
  secondaryAddress?: {
    /**
     * Sets the type of address (primary/secondary/home/work/forwarding/company/previous)
     */
    type?: string
    /**
     * Sets the building name
     */
    buildingName?: string
    /**
     * Sets the building number
     */
    buildingNumber?: string
    /**
     * Sets the first line of the address
     */
    line1?: string
    /**
     * Sets the second line of the address
     */
    line2?: string
    /**
     * Sets the third line of the address
     */
    line3?: string
    /**
     * Sets the fourth line of the address
     */
    line4?: string
    /**
     * Sets the postcode
     */
    postcode?: string
    /**
     * Sets the ISO-3166 country code associated with the address
     */
    countryId?: string
  }
  /**
   * Sets the contacts work address
   */
  workAddress?: {
    /**
     * Sets the type of address (primary/secondary/home/work/forwarding/company/previous)
     */
    type?: string
    /**
     * Sets the building name
     */
    buildingName?: string
    /**
     * Sets the building number
     */
    buildingNumber?: string
    /**
     * Sets the first line of the address
     */
    line1?: string
    /**
     * Sets the second line of the address
     */
    line2?: string
    /**
     * Sets the third line of the address
     */
    line3?: string
    /**
     * Sets the fourth line of the address
     */
    line4?: string
    /**
     * Sets the postcode
     */
    postcode?: string
    /**
     * Sets the ISO-3166 country code associated with the address
     */
    countryId?: string
  }
  /**
   * Sets a JSON fragment to attach to this contact as metadata
   */
  metadata?: {
    [name: string]: any
  }
}
/**
 * Model used for creating a contacts source
 */
export interface UpdateContactSourceModel {
  /**
   * Sets the unique identifier of the contacts source
   */
  id?: string
  /**
   * Sets the contacts source type
   */
  type?: string
}
export interface UpdateDocumentModel {
  /**
   * Sets the Id of the document type
   */
  typeId?: string
  /**
   * Sets the filename assigned to the document
   */
  name?: string
}
/**
 * Model to update an existing identity check
 */
export interface UpdateIdentityCheckModel {
  /**
   * Sets the date that the identity check was performed
   * Note that this can be different to the date that the check was created
   */
  checkDate?: string // date-time
  /**
   * Sets the status of this identity check  (pass/fail/pending/cancelled/warnings/unchecked)
   */
  status?: string
  /**
   * Sets the id of the negotiator that performed the identity check
   * Note that this can be different to the negotiator that created the check
   */
  negotiatorId?: string
  /**
   * Sets the details of document one that have been provided for this identity check
   */
  document1?: {
    /**
     * Sets the id of the document type that describes this document
     */
    typeId?: string
    /**
     * Sets the date that this document expires
     */
    expiry?: string // date-time
    /**
     * Sets the textual details of the identity document (eg. passport number)
     */
    details?: string
  }
  /**
   * Sets the details of document two that have been provided for this identity check
   */
  document2?: {
    /**
     * Sets the id of the document type that describes this document
     */
    typeId?: string
    /**
     * Sets the date that this document expires
     */
    expiry?: string // date-time
    /**
     * Sets the textual details of the identity document (eg. passport number)
     */
    details?: string
  }
  /**
   * Sets a JSON fragment to attach to this identity check as metadata
   */
  metadata?: {
    [name: string]: any
  }
}
/**
 * Model to update an identity document
 */
export interface UpdateIdentityDocumentModel {
  /**
   * Sets the id of the document type that describes this document
   */
  typeId?: string
  /**
   * Sets the date that this document expires
   */
  expiry?: string // date-time
  /**
   * Sets the textual details of the identity document (eg. passport number)
   */
  details?: string
}
/**
 * Request body to update a landlord
 */
export interface UpdateLandlordModel {
  /**
   * Sets the active flag against this landlord
   */
  active?: boolean
  /**
   * Sets the unique idenfitier of the landlords solicitor
   */
  solicitorId?: string
  /**
   * Sets the office id that is associated to this landlord
   */
  officeId?: string
  /**
   * Sets the landlords source
   */
  source?: {
    /**
     * Sets the unique identifier of the landlords source
     */
    id?: string
    /**
     * Sets the landlords source type
     */
    type?: string
  }
  /**
   * Sets a JSON fragment to attach to this landlord as metadata
   */
  metadata?: {
    [name: string]: any
  }
}
/**
 * Model used for updating a landlords source
 */
export interface UpdateLandlordSourceModel {
  /**
   * Sets the unique identifier of the landlords source
   */
  id?: string
  /**
   * Sets the landlords source type
   */
  type?: string
}
/**
 * Model to update a negotiator
 */
export interface UpdateNegotiatorModel {
  /**
   * Sets the name of the negotiator
   */
  name?: string
  /**
   * Sets the job title of the negotiator
   */
  jobTitle?: string
  /**
   * Sets the inactive flag of the negotiator
   */
  active?: boolean
  /**
   * The work phone number of the negotiator
   */
  workPhone?: string
  /**
   * The mobile phone number of the negotiator
   */
  mobilePhone?: string
  /**
   * The email address of the negotiator
   */
  email?: string
  /**
   * Sets a JSON fragment to attach to this negotiator as metadata
   */
  metadata?: {
    [name: string]: any
  }
}
/**
 * Model to update an offer
 */
export interface UpdateOfferModel {
  /**
   * Sets the id of the negotiator associated to the offer
   */
  negotiatorId?: string
  /**
   * Sets the date the offer was made
   */
  date?: string // date-time
  /**
   * Sets the amount the offer was for
   */
  amount?: number // double
  /**
   * Sets the status of the offer
   */
  status?: string
  /**
   * Sets the requested inclusions of the offer
   */
  inclusions?: string
  /**
   * Sets the requested exclusions of the offer
   */
  exclusions?: string
  /**
   * Sets the conditions of the offer
   */
  conditions?: string
  /**
   * Sets a JSON fragment to attach to this offer as metadata
   */
  metadata?: {
    [name: string]: any
  }
}
/**
 * Model to update an address
 */
export interface UpdateOfficeAddressModel {
  /**
   * Sets the type of address (primary/secondary/home/work/forwarding/company/previous)
   */
  type?: string
  /**
   * Sets the building name
   */
  buildingName?: string
  /**
   * Sets the building number
   */
  buildingNumber?: string
  /**
   * Sets the first line of the address
   */
  line1?: string
  /**
   * Sets the second line of the address
   */
  line2?: string
  /**
   * Sets the third line of the address
   */
  line3?: string
  /**
   * Sets the fourth line of the address
   */
  line4?: string
  /**
   * Sets the postcode
   */
  postcode?: string
  /**
   * Sets the ISO-3166 country code associated with the address
   */
  countryId?: string
}
/**
 * Model to update an office
 */
export interface UpdateOfficeModel {
  /**
   * Sets the name of the office
   */
  name?: string
  /**
   * Sets the manager of the office
   */
  manager?: string
  /**
   * Sets the address of the office
   */
  address?: {
    /**
     * Sets the type of address (primary/secondary/home/work/forwarding/company/previous)
     */
    type?: string
    /**
     * Sets the building name
     */
    buildingName?: string
    /**
     * Sets the building number
     */
    buildingNumber?: string
    /**
     * Sets the first line of the address
     */
    line1?: string
    /**
     * Sets the second line of the address
     */
    line2?: string
    /**
     * Sets the third line of the address
     */
    line3?: string
    /**
     * Sets the fourth line of the address
     */
    line4?: string
    /**
     * Sets the postcode
     */
    postcode?: string
    /**
     * Sets the ISO-3166 country code associated with the address
     */
    countryId?: string
  }
  /**
   * The work phone number of the office
   */
  workPhone?: string
  /**
   * The email address of the office
   */
  email?: string
  /**
   * Sets a JSON fragment to attach to this office as metadata
   */
  metadata?: {
    [name: string]: any
  }
}
/**
 * A model used to update a property address
 */
export interface UpdatePropertyAddressModel {
  /**
   * Sets the building name
   */
  buildingName?: string
  /**
   * Sets the building number
   */
  buildingNumber?: string
  /**
   * Sets the first line of the address
   */
  line1?: string
  /**
   * Sets the second line of the address
   */
  line2?: string
  /**
   * Sets the third line of the address
   */
  line3?: string
  /**
   * Sets the fourth line of the address
   */
  line4?: string
  /**
   * Sets the postcode
   */
  postcode?: string
  /**
   * Sets the ISO-3166 country code associated with the address
   */
  countryId?: string
  /**
   * Sets the geolocation of the address
   */
  geolocation?: {
    /**
     * Sets the latitude coordinate of the coordinate pair
     */
    latitude?: number // double
    /**
     * Sets the longitude coordinate of the coordinate pair
     */
    longitude?: number // double
  }
}
/**
 * A model used to update the details of an EPC graph
 */
export interface UpdatePropertyEpcModel {
  /**
   * Sets whether this property is exempt from requiring an EPC
   */
  exempt?: boolean
  /**
   * Sets the current energy efficienty rating
   */
  eer?: number // int32
  /**
   * Sets the potential energy efficienty rating
   */
  eerPotential?: number // int32
  /**
   * Sets the current environmental impact rating
   */
  eir?: number // int32
  /**
   * Sets the potential environmental impact rating
   */
  eirPotential?: number // int32
}
/**
 * A model used to update the external area information about a property
 */
export interface UpdatePropertyExternalAreaModel {
  /**
   * Sets the unit of area (acres/hectares)
   */
  type?: string
  /**
   * Sets the minimum area bound
   */
  min?: number // double
  /**
   * Sets the maximum area bound
   */
  max?: number // double
}
/**
 * A model used to update the geolocation coordinates of a property address
 */
export interface UpdatePropertyGeolocationModel {
  /**
   * Sets the latitude coordinate of the coordinate pair
   */
  latitude?: number // double
  /**
   * Sets the longitude coordinate of the coordinate pair
   */
  longitude?: number // double
}
/**
 * Outward facing model for the updating of a property image
 */
export interface UpdatePropertyImageModel {
  /**
   * Sets the images caption
   */
  caption?: string
  /**
   * Sets the images type
   */
  type?: string
}
/**
 * A model used to update the internal area information about a property address
 */
export interface UpdatePropertyInternalAreaModel {
  /**
   * Sets the unit of area (squareFeet/squareMetres)
   */
  type?: string
  /**
   * Sets the minimum area bound
   */
  min?: number // double
  /**
   * Sets the maximum area bound
   */
  max?: number // double
}
/**
 * A model used to update the letting information associated to a property
 */
export interface UpdatePropertyLettingModel {
  /**
   * Sets the date that the property was flagged as for let
   */
  instructed?: string // date-time
  /**
   * Sets the date this property is next available from
   */
  availableFrom?: string // date-time
  /**
   * Sets the date this property is available to
   */
  availableTo?: string // date-time
  /**
   * Sets the monetary amount required to rent this property
   */
  rent?: number // double
  /**
   * Sets the rent collection frequency (weekly/monthly/yearly)
   */
  rentFrequency?: string
  /**
   * Sets the acceptable letting terms (short/long/any)
   */
  term?: string
  /**
   * Sets the letting status of this property (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn)
   */
  status?: string
}
/**
 * A model used to update an existing property
 */
export interface UpdatePropertyModel {
  /**
   * Sets the strapline description
   */
  strapline?: string
  /**
   * Sets the brief description
   */
  description?: string
  /**
   * Sets the summary of accommodation
   */
  summary?: string
  /**
   * Sets the address of the property
   */
  address?: {
    /**
     * Sets the building name
     */
    buildingName?: string
    /**
     * Sets the building number
     */
    buildingNumber?: string
    /**
     * Sets the first line of the address
     */
    line1?: string
    /**
     * Sets the second line of the address
     */
    line2?: string
    /**
     * Sets the third line of the address
     */
    line3?: string
    /**
     * Sets the fourth line of the address
     */
    line4?: string
    /**
     * Sets the postcode
     */
    postcode?: string
    /**
     * Sets the ISO-3166 country code associated with the address
     */
    countryId?: string
    /**
     * Sets the geolocation of the address
     */
    geolocation?: {
      /**
       * Sets the latitude coordinate of the coordinate pair
       */
      latitude?: number // double
      /**
       * Sets the longitude coordinate of the coordinate pair
       */
      longitude?: number // double
    }
  }
  /**
   * Sets the number of bedrooms
   */
  bedrooms?: number // int32
  /**
   * Sets the number of reception rooms
   */
  receptions?: number // int32
  /**
   * Sets the number of bathrooms
   */
  bathrooms?: number // int32
  /**
   * Sets the council tax banding (A/B/C/D/E/F/G/H)
   */
  councilTax?: string
  /**
   * Sets a value indicating whether this property can be advertised on the internet
   */
  internetAdvertising?: boolean
  /**
   * The arrangements regarding viewing the property
   */
  viewingArrangements?: string
  /**
   * Sets details of the EPC statistics
   */
  epc?: {
    /**
     * Sets whether this property is exempt from requiring an EPC
     */
    exempt?: boolean
    /**
     * Sets the current energy efficienty rating
     */
    eer?: number // int32
    /**
     * Sets the potential energy efficienty rating
     */
    eerPotential?: number // int32
    /**
     * Sets the current environmental impact rating
     */
    eir?: number // int32
    /**
     * Sets the potential environmental impact rating
     */
    eirPotential?: number // int32
  }
  /**
   * Sets the external area
   */
  externalArea?: {
    /**
     * Sets the unit of area (acres/hectares)
     */
    type?: string
    /**
     * Sets the minimum area bound
     */
    min?: number // double
    /**
     * Sets the maximum area bound
     */
    max?: number // double
  }
  /**
   * Sets details of the internal dimensions of the property
   */
  internalArea?: {
    /**
     * Sets the unit of area (squareFeet/squareMetres)
     */
    type?: string
    /**
     * Sets the minimum area bound
     */
    min?: number // double
    /**
     * Sets the maximum area bound
     */
    max?: number // double
  }
  /**
   * Sets the sales specific details of the property
   */
  selling?: {
    /**
     * Sets the date that the property was flagged as for sale
     */
    instructed?: string // date-time
    /**
     * Sets the asking price of the property
     */
    price?: number // int32
    /**
     * Sets the price qualifier (askingPrice/priceOnApplication/guidePrice/offersInRegion/offersOver/offersInExcess/fixedPrice/priceReducedTo)
     */
    qualifier?: string
    /**
     * Sets the sales status (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn)
     */
    status?: string
    /**
     * Sets details of the sales tenure of the property
     */
    tenure?: {
      /**
       * Sets the type of tenure that applies to this property
       */
      type?: string
      /**
       * Sets tenure expiration date
       */
      expiry?: string // date-time
    }
  }
  /**
   * Sets the letting specific details of the property
   */
  letting?: {
    /**
     * Sets the date that the property was flagged as for let
     */
    instructed?: string // date-time
    /**
     * Sets the date this property is next available from
     */
    availableFrom?: string // date-time
    /**
     * Sets the date this property is available to
     */
    availableTo?: string // date-time
    /**
     * Sets the monetary amount required to rent this property
     */
    rent?: number // double
    /**
     * Sets the rent collection frequency (weekly/monthly/yearly)
     */
    rentFrequency?: string
    /**
     * Sets the acceptable letting terms (short/long/any)
     */
    term?: string
    /**
     * Sets the letting status of this property (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn)
     */
    status?: string
  }
  /**
   * Sets the property types
   */
  type?: string[]
  /**
   * Sets the property style
   */
  style?: string[]
  /**
   * Sets the property situation
   */
  situation?: string[]
  /**
   * Sets the property parking
   */
  parking?: string[]
  /**
   * Sets the property age
   */
  age?: string[]
  /**
   * Sets the property locality
   */
  locality?: string[]
  /**
   * Sets the properties negotiatior id
   */
  negotiatorId?: string
  /**
   * Sets the properties office ids
   */
  officeIds?: string[]
  /**
   * Sets the identifier of the area that the property resides in
   */
  areaId?: string
  /**
   * Sets a JSON fragment to attach to this property as metadata
   */
  metadata?: {
    [name: string]: any
  }
}
/**
 * A model used to update the selling information associated to a property
 */
export interface UpdatePropertySellingModel {
  /**
   * Sets the date that the property was flagged as for sale
   */
  instructed?: string // date-time
  /**
   * Sets the asking price of the property
   */
  price?: number // int32
  /**
   * Sets the price qualifier (askingPrice/priceOnApplication/guidePrice/offersInRegion/offersOver/offersInExcess/fixedPrice/priceReducedTo)
   */
  qualifier?: string
  /**
   * Sets the sales status (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn)
   */
  status?: string
  /**
   * Sets details of the sales tenure of the property
   */
  tenure?: {
    /**
     * Sets the type of tenure that applies to this property
     */
    type?: string
    /**
     * Sets tenure expiration date
     */
    expiry?: string // date-time
  }
}
/**
 * A model used to update the tenure information about a property
 */
export interface UpdatePropertyTenureModel {
  /**
   * Sets the type of tenure that applies to this property
   */
  type?: string
  /**
   * Sets tenure expiration date
   */
  expiry?: string // date-time
}
/**
 * Model to update a tasks recipient
 */
export interface UpdateRecipientModel {
  /**
   * Unique identifier of the tasks recipient
   */
  id?: string
  /**
   * Entity type of the recipient (office/negotiator)
   */
  type?: string
}
/**
 * Model to update a source
 */
export interface UpdateSourceModel {
  /**
   * Sets the sources name
   */
  name?: string
  /**
   * Sets the sources type
   */
  type?: string
  /**
   * Sets a list of departments related to this source
   */
  departmentIds?: string[]
  /**
   * Sets a list of offices related to this source
   */
  officeIds?: string[]
}
/**
 * Model used to update an existing task
 */
export interface UpdateTaskModel {
  /**
   * Sets the date the task will be activated
   */
  activates?: string // date-time
  /**
   * Sets the date the task will be completed
   */
  completed?: string // date-time
  /**
   * Sets the type of task
   */
  typeId?: string
  /**
   * Sets the unique identifier of the negotiator who created the task
   */
  senderId?: string
  /**
   * Sets the text against the task or message
   */
  text?: string
  /**
   * Sets the unique identifier of the landlord the task is related too
   */
  landlordId?: string
  /**
   * Sets the unique identifier of the property the task is related too
   */
  propertyId?: string
  /**
   * Sets the unique identifier of the applicant the task is related too
   */
  applicantId?: string
  /**
   * Sets the unique identifier of the tenancy the task is related too
   */
  tenancyId?: string
  /**
   * Sets the unique identifier of the contact the task is related too
   */
  contactId?: string
  /**
   * Sets the recipient to update against this task
   */
  recipient?: {
    /**
     * Unique identifier of the tasks recipient
     */
    id?: string
    /**
     * Entity type of the recipient (office/negotiator)
     */
    type?: string
  }
  /**
   * Sets a JSON fragment to attach to this task as metadata
   */
  metadata?: {
    [name: string]: any
  }
}
/**
 * Model to specify updates for a vendor
 */
export interface UpdateVendorModel {
  /**
   * Sets the date of the last call
   */
  lastCall?: string // date-time
  /**
   * Sets the date of the next call
   */
  nextCall?: string // date-time
  /**
   * Sets the vendors type
   */
  typeId?: string
  /**
   * Sets the vendors selling reason
   */
  sellingReasonId?: string
  /**
   * Sets the unique identifier of the vendors solicitor
   */
  solicitorId?: string
  /**
   * Sets the vendors source
   */
  source?: {
    /**
     * Sets the unique identifier of the vendors source
     */
    id?: string
    /**
     * Sets the vendors source type
     */
    type?: string
  }
  /**
   * Sets a JSON fragment to attach to this vendor as metadata
   */
  metadata?: {
    [name: string]: any
  }
}
/**
 * Request body to update a works order item
 */
export interface UpdateWorksOrderItemModel {
  /**
   * Sets the notes against the work order item
   */
  notes?: string
  /**
   * Sets the entity to charge the work order item to
   */
  chargeTo?: string
  /**
   * Sets the estimate of the work order item
   */
  estimate?: number // double
  /**
   * Sets the estimate type of the work order item
   */
  estimateType?: string
  /**
   * Sets the cost of the work order item
   */
  cost?: number // double
}
/**
 * Request body to update a works order
 */
export interface UpdateWorksOrderModel {
  /**
   * Sets the id of the company that has been selected to perform the work
   */
  companyId?: string
  /**
   * Sets the id of the property the work is for
   */
  propertyId?: string
  /**
   * Sets the id of the tenancy that originated the work
   */
  tenancyId?: string
  /**
   * Sets the id of the negotiator that booked the work
   */
  negotiatorId?: string
  /**
   * Sets the id of the type of work that needs to be performed
   */
  typeId?: string
  /**
   * Sets the status of the works order
   */
  status?: string
  /**
   * Sets the description of the works order
   */
  description?: string
  /**
   * Sets the person who reported the fault
   */
  reporter?: string
  /**
   * Sets the date the works order was booked
   */
  booked?: string // date-time
  /**
   * Sets the date the works order is required
   */
  required?: string // date-time
  /**
   * Sets the date the works order was completed
   */
  completed?: string // date-time
  /**
   * Sets a JSON fragment to attach to this works order as metadata
   */
  metadata?: {
    [name: string]: any
  }
}
/**
 * Model representing the physical address of a building or premise
 */
export interface VendorContactAddressModel {
  /**
   * Gets the building name
   */
  buildingName?: string
  /**
   * Gets the building number
   */
  buildingNumber?: string
  /**
   * Gets the first line of the address
   */
  line1?: string
  /**
   * Gets the second line of the address
   */
  line2?: string
  /**
   * Gets the third line of the address
   */
  line3?: string
  /**
   * Gets the fourth line of the address
   */
  line4?: string
  /**
   * Gets the postcode
   */
  postcode?: string
  /**
   * Gets the ISO-3166 country code associated with the address
   */
  countryId?: string
}
/**
 * Model representing the details of a contact relationship associated with a vendor entity
 */
export interface VendorContactModel {
  /**
   * Gets the unique identifier of the contact
   */
  id?: string
  /**
   * Gets the name of this contact or company
   */
  name?: string
  /**
   * Gets the type of this contact (Contact/Company)
   */
  type?: string
  /**
   * The home phone number of the contact
   */
  homePhone?: string
  /**
   * The work phone number of the contact
   */
  workPhone?: string
  /**
   * The mobile phone number of the contact
   */
  mobilePhone?: string
  /**
   * The email address of the contact
   */
  email?: string
  /**
   * Gets the primary address of the contact
   */
  primaryAddress?: {
    /**
     * Gets the building name
     */
    buildingName?: string
    /**
     * Gets the building number
     */
    buildingNumber?: string
    /**
     * Gets the first line of the address
     */
    line1?: string
    /**
     * Gets the second line of the address
     */
    line2?: string
    /**
     * Gets the third line of the address
     */
    line3?: string
    /**
     * Gets the fourth line of the address
     */
    line4?: string
    /**
     * Gets the postcode
     */
    postcode?: string
    /**
     * Gets the ISO-3166 country code associated with the address
     */
    countryId?: string
  }
  readonly _links?: {
    [name: string]: {
      href?: string
    }
  }
  readonly _embedded?: {
    [name: string]: any
  }
}
/**
 * Model representing a vendor
 */
export interface VendorModel {
  /**
   * Gets the vendors unique identfier
   */
  id?: string
  /**
   * Gets the datetime when the vendor was created
   */
  created?: string // date-time
  /**
   * Gets the date and time that the vendor was last modified
   */
  modified?: string // date-time
  /**
   * Gets the date and time that the vendor was last called
   */
  lastCall?: string // date-time
  /**
   * Gets the date and time that the vendor will be called next
   */
  nextCall?: string // date-time
  /**
   * Gets the type of vendor
   */
  typeId?: string
  /**
   * Gets the vendors reason for selling
   */
  sellingReasonId?: string
  /**
   * Gets the unique identifier of the vendors solicitor
   */
  solicitorId?: string
  /**
   * Gets the vendors source information
   */
  source?: {
    /**
     * Gets the unique identifier of the vendors source
     */
    id?: string
    /**
     * Gets the vendors source type (office/source)
     */
    type?: string
    readonly _links?: {
      [name: string]: {
        href?: string
      }
    }
    readonly _embedded?: {
      [name: string]: any
    }
  }
  /**
   * Gets a collection of contact entities attached to this vendor
   * The primary contact will always appear first in the collection
   */
  related?: {
    /**
     * Gets the unique identifier of the contact
     */
    id?: string
    /**
     * Gets the name of this contact or company
     */
    name?: string
    /**
     * Gets the type of this contact (Contact/Company)
     */
    type?: string
    /**
     * The home phone number of the contact
     */
    homePhone?: string
    /**
     * The work phone number of the contact
     */
    workPhone?: string
    /**
     * The mobile phone number of the contact
     */
    mobilePhone?: string
    /**
     * The email address of the contact
     */
    email?: string
    /**
     * Gets the primary address of the contact
     */
    primaryAddress?: {
      /**
       * Gets the building name
       */
      buildingName?: string
      /**
       * Gets the building number
       */
      buildingNumber?: string
      /**
       * Gets the first line of the address
       */
      line1?: string
      /**
       * Gets the second line of the address
       */
      line2?: string
      /**
       * Gets the third line of the address
       */
      line3?: string
      /**
       * Gets the fourth line of the address
       */
      line4?: string
      /**
       * Gets the postcode
       */
      postcode?: string
      /**
       * Gets the ISO-3166 country code associated with the address
       */
      countryId?: string
    }
    readonly _links?: {
      [name: string]: {
        href?: string
      }
    }
    readonly _embedded?: {
      [name: string]: any
    }
  }[]
  /**
   * Gets the vendor's negotiator id
   */
  negotiatorId?: string
  /**
   * Gets the vendor's office ids
   */
  officeIds?: string[]
  /**
   * Gets a listing of additional metadata that has been set against this vendor
   */
  metadata?: {
    [name: string]: any
  }
  readonly _links?: {
    [name: string]: {
      href?: string
    }
  }
  readonly _embedded?: {
    [name: string]: any
  }
}
/**
 * Model representing the details of a vendors source
 */
export interface VendorSourceModel {
  /**
   * Gets the unique identifier of the vendors source
   */
  id?: string
  /**
   * Gets the vendors source type (office/source)
   */
  type?: string
  readonly _links?: {
    [name: string]: {
      href?: string
    }
  }
  readonly _embedded?: {
    [name: string]: any
  }
}
/**
 * Model used for updating a vendors source
 */
export interface VendorUpdateSourceModel {
  /**
   * Sets the unique identifier of the vendors source
   */
  id?: string
  /**
   * Sets the vendors source type
   */
  type?: string
}
/**
 * Outward facing model to display a work order item
 */
export interface WorksOrderItemModel {
  /**
   * Gets the unique identifier of the works order item
   */
  id?: string
  /**
   * Gets the unique identifier of the works order
   */
  worksOrderId?: string
  /**
   * Gets the datetime when the works order item was created
   */
  created?: string // date-time
  /**
   * Gets the date and time that the works order item was last modified
   */
  modified?: string // date-time
  /**
   * Gets the notes of the work order item
   */
  notes?: string
  /**
   * Gets the entity type to charge to (Landlord, Tenant)
   */
  chargeTo?: string
  /**
   * Gets the estimate of the work order item
   */
  estimate?: number // double
  /**
   * Gets the work order items estimate type (Agent, Verbal, Written)
   */
  estimateType?: string
  /**
   * Gets the cost of the work order item
   */
  cost?: number // double
  readonly _links?: {
    [name: string]: {
      href?: string
    }
  }
  readonly _embedded?: {
    [name: string]: any
  }
}
export interface WorksOrderModel {
  /**
   * Gets the unique identifier of the works order
   */
  id?: string
  /**
   * Gets the datetime when the works order was created
   */
  created?: string // date-time
  /**
   * Gets the date and time that the works order was last modified
   */
  modified?: string // date-time
  /**
   * Gets the id of the company that has been selected to perform the work
   */
  companyId?: string
  /**
   * Gets the id of the property the work is for
   */
  propertyId?: string
  /**
   * Gets the id of the tenancy that originated the work
   */
  tenancyId?: string
  /**
   * Gets the id of the negotiator that booked the work
   */
  negotiatorId?: string
  /**
   * Gets the id of the type of work that needs to be performed
   */
  typeId?: string
  /**
   * Gets the status of the works order
   */
  status?: string
  /**
   * Gets the description of the works order
   */
  description?: string
  /**
   * Gets the person who reported the fault
   */
  reporter?: string
  /**
   * Gets the date the works order was booked
   */
  booked?: string // date-time
  /**
   * Gets the date the works order is requried
   */
  required?: string // date-time
  /**
   * Gets the date the works order is completed
   */
  completed?: string // date-time
  /**
   * Gets the collection of work order items associated to the works order
   */
  items?: {
    /**
     * Gets the unique identifier of the works order item
     */
    id?: string
    /**
     * Gets the unique identifier of the works order
     */
    worksOrderId?: string
    /**
     * Gets the datetime when the works order item was created
     */
    created?: string // date-time
    /**
     * Gets the date and time that the works order item was last modified
     */
    modified?: string // date-time
    /**
     * Gets the notes of the work order item
     */
    notes?: string
    /**
     * Gets the entity type to charge to (Landlord, Tenant)
     */
    chargeTo?: string
    /**
     * Gets the estimate of the work order item
     */
    estimate?: number // double
    /**
     * Gets the work order items estimate type (Agent, Verbal, Written)
     */
    estimateType?: string
    /**
     * Gets the cost of the work order item
     */
    cost?: number // double
    readonly _links?: {
      [name: string]: {
        href?: string
      }
    }
    readonly _embedded?: {
      [name: string]: any
    }
  }[]
  /**
   * Gets a listing of additional metadata that has been set against this works order
   */
  metadata?: {
    [name: string]: any
  }
  readonly _links?: {
    [name: string]: {
      href?: string
    }
  }
  readonly _embedded?: {
    [name: string]: any
  }
}