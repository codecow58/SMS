import React from "react";
import { Form, Field } from "react-final-form";
import { DefaultButton, IIconProps } from "@fluentui/react";
import { TextField } from "@fluentui/react/lib/TextField";
import { useNavigate } from "react-router-dom";


// const composeValidators =
//   (...validators: any) =>
//   (value: any) =>
//     validators.reduce(
//       (error: any, validator: any) => error || validator(value),
//       undefined
//   );

const required = (value: any) => (value ? undefined : "Required");

const Login: React.FunctionComponent = () => {
  const loginIcon: IIconProps = { iconName: "Unlock" };
  const userIconProps = { iconName: "Mail" };
  const navigate = useNavigate();

  const onSubmit = (value: any) => {
    console.log(value);
    navigate('home')
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection:'column'
      }}
    >

      <h3>School Management Software</h3>
      <div>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field name="email" validate={required}>
                {({ input, meta }) => {
                  return (
                    <div>
                      <TextField
                        label="Email"
                        iconProps={userIconProps}
                        {...input}
                        errorMessage={meta.error && meta.touched && meta.error}
                      />
                    </div>
                  );
                }}
              </Field>
              <Field name="password" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <TextField
                      label="Password"
                      type="password"
                      canRevealPassword
                      revealPasswordAriaLabel="Show password"
                      {...input}
                      errorMessage={meta.error && meta.touched && meta.error}
                    />
                  </div>
                )}
              </Field>
              <br />
              <DefaultButton
                text=" Log In "
                type="submit"
                iconProps={loginIcon}
              />
              ;
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default Login;
