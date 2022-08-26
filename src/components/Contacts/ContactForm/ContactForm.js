import s from "./ContactForm.module.css";
import {Button} from "../../../common/components/Button/Button";
import {useFormik} from "formik";
import {formAPI} from "../../../api/formApi";
import {useEffect, useState} from "react";

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 50) {
    errors.name = "Must be 50 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.message) {
    errors.message = "Required";
  } else if (values.message.length > 300) {
    errors.message = "Must be 300 characters or less";
  }

  return errors;
};

export const ContactForm = () => {
  const [sendFormResult, setSendFormResult] = useState(null);

  useEffect(() => {
    const timeoutID = setTimeout(() => setSendFormResult(null), 2000);
    return () => {
      clearTimeout(timeoutID);
    };
  }, [sendFormResult]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validate,
    onSubmit: values => {
      formAPI.sendMessage(values)
        .then(() => {
          setSendFormResult("Message successfully sent");
          formik.resetForm();
        })
        .catch((error) => {
          setSendFormResult("Sending failed");
        });
    }
  });

  return (
    <form className={s.form} onSubmit={formik.handleSubmit}>
      {sendFormResult && <div>{sendFormResult}</div>}
      <div className={s.formGroup}>
        <input
          className={s.formField}
          placeholder={"Your name"}
          {...formik.getFieldProps("name")}
        />
        {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>}
      </div>
      <div className={s.formGroup}>
        <input
          className={s.formField}
          placeholder={"Your email"}
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
      </div>
      <div className={s.formGroup}>
        <input
          className={s.formField}
          placeholder={"Your phone"}
          {...formik.getFieldProps("phone")}
        />
      </div>
      <div className={s.formGroup}>
        <textarea
          className={s.formField}
          placeholder={"Tell me more about your needs..."}
          {...formik.getFieldProps("message")}
        />
        {formik.touched.message && formik.errors.message && <div>{formik.errors.message}</div>}
      </div>
      <div className={s.formFooter}>
        <Button>Send message</Button>
      </div>
    </form>
  );
};
