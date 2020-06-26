import React from 'react'
import {
  H3,
  FlexContainerResponsive,
  Content,
  FlexContainerBasic,
  GridItem,
  Grid,
  Button,
  Formik,
  Input,
  ImageInput,
  TextArea,
  SelectBox,
  Form,
  LevelRight,
} from '@reapit/elements'
import { companyInformationFormSchema } from './validation-schema'

export const CompanyInformation = () => {
  return (
    <FlexContainerBasic flexColumn hasPadding>
      <Content>
        <FlexContainerResponsive flexColumn hasBackground hasPadding>
          <H3>Company Information</H3>
          <Formik
            initialValues={{}}
            validationSchema={companyInformationFormSchema}
            onSubmit={values => {
              // TBC
              console.log(values)
            }}
          >
            <Form>
              <Grid>
                <GridItem>
                  <Input type="text" labelText="Company Name" id="companyName" name="companyName" />
                </GridItem>
                <GridItem>
                  <Input type="text" labelText="Telephone" id="tel" name="tel" />
                </GridItem>
              </Grid>
              <Grid>
                <GridItem>
                  <Input type="text" labelText="Website" id="website" name="website" />
                </GridItem>
                <GridItem>
                  <Input type="text" labelText="Office Email" id="officeEmail" name="officeEmail" />
                </GridItem>
              </Grid>

              <Grid>
                <GridItem>
                  <Input type="text" labelText="VAT Number" id="name" name="name" />
                </GridItem>
                <GridItem>
                  <Input type="text" labelText="Company registration number" id="reg" name="reg" />
                </GridItem>
              </Grid>

              <Grid>
                <GridItem>
                  <TextArea id="about" labelText="About" name="about" />
                </GridItem>
                <GridItem>
                  <div className="control">
                    <label className="label">Logo</label>
                    <ImageInput id="iconImage" labelText="Upload Logo" name="iconImageUrl" allowClear />
                  </div>
                </GridItem>
              </Grid>

              <GridItem>
                <H3>Company Address</H3>
              </GridItem>
              <Grid>
                <GridItem>
                  <Input type="text" labelText="Line 1*" id="line1" name="line1" />
                </GridItem>
                <GridItem>
                  <Input type="text" labelText="Line 2" id="line2" name="line2" />
                </GridItem>
              </Grid>

              <Grid>
                <GridItem>
                  <Input type="text" labelText="Line 3" id="line3" name="line3" />
                </GridItem>
                <GridItem>
                  <Input type="text" labelText="Line 4" id="line4" name="line4" />
                </GridItem>
              </Grid>

              <Grid>
                <GridItem>
                  <SelectBox id="countryId" name="countryId" options={[]} labelText="Country" />
                </GridItem>
                <GridItem>
                  <Input type="text" labelText="Postcode" id="postCode" name="postCode" />
                </GridItem>
              </Grid>

              <LevelRight>
                <Button className="mt-8" type="submit" variant="primary">
                  Save
                </Button>
              </LevelRight>
            </Form>
          </Formik>
        </FlexContainerResponsive>
      </Content>
    </FlexContainerBasic>
  )
}