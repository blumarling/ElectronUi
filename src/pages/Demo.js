import React from "react"
import {
  Area,
  Grid,
  Title,
  Checkbox,
  CommonButton,
  InputText,
  Select,
  ScrollView
} from "../darkUi"

class Demo extends React.Component{
  render() {
    return (
      <ScrollView>
        <Grid>
          <Area shrink={2}>
            <Title>Titolo Sezione</Title>
            <p>Lorem ipsum dolor sit amet</p>
            <Checkbox>Il titolo del checkbox</Checkbox>
            <Checkbox>Il titolo del checkbox</Checkbox>
          </Area>
        </Grid>

        <Grid>
          <Area shrink={2}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            <CommonButton>Invia</CommonButton>
          </Area>
        </Grid>

        <Grid>
          <Area shrink={2}>
            <p>Lorem ipsum dolor sit amet</p>
            <InputText name="giggio" />
          </Area>
        </Grid>

        <Grid>
          <Area shrink={2}>
            <p>Select</p>
            <Select />
          </Area>
        </Grid>
      </ScrollView>
    )
  }
}

export default Demo