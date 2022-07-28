import React from 'react'
import {Form,Formik} from "formik"
import CustomInput from "./CustomInput";
import CustomSelect from './CustomSelect';
import { advancedSchema } from '../schemas';
import CustomCheckBox from './CustomCheckBox';
  


const onSubmit = async (values, action) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    action.resetForm()
}
const AdvancedForm = () => {
    return (
        <Formik
        initialValues={{ username:"", jobtype:"", acceptedTos:false }} 
        validationSchema = {advancedSchema}
        onSubmit={onSubmit}
      >
        {({isSubmitting}) => (
          <Form>
          <CustomInput
          label="Username"
          name="username"
          type="text"
          placeholder="Enter your username"
           />
           <CustomSelect
           label="Job Type"
           name="jobtype"
           placeholder="Pls enter a valid job type"
           >
            <option value="">Please select a job type</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Product Manager</option>
            <option value="other">Other</option>
            </CustomSelect>
            <CustomCheckBox type="checkbox" name="acceptedTo" />

            <button disabled={isSubmitting} type="submit">Submit</button>
          </Form>
        )}
          </Formik>
    );
  };
  export default AdvancedForm;