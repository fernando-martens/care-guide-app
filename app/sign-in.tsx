import ThemedButton from '@/components/ThemedButton';
import { ThemedTextInput } from '@/components/ThemedTextInput';
import { ThemedView } from '@/components/ThemedView';
import { useSession } from '@/context/SessionContext';
import { Formik } from 'formik';
import { StyleSheet, TouchableWithoutFeedback, Keyboard  } from 'react-native';


export default function SignIn() {

  const { signIn  } = useSession();
  
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={values => signIn(values.email, values.password)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ThemedView style={styles.container}>
            <ThemedTextInput
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
              name="email"
              placeholder="Email"
            />
            <ThemedTextInput
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
              name="password"
              placeholder="Password"
            />
            <ThemedButton
              title="Sign In"
              onPress={() => {
                handleSubmit();   
              }}
            />
          </ThemedView>
        </TouchableWithoutFeedback>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,   
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 50,
    gap: 20
  },
});