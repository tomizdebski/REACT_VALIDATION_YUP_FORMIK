import { Formik, Field } from "formik";
import {
  Box,
  Button,
  Select,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Checkbox
} from "@chakra-ui/react";
import * as yup from "yup"

const validationSchema=yup.object().shape({
  name: yup.string('To polemusi być napisem').required('To pole jest wymagane').min(5 | "To p[ole musi mieć 5 liter"), 
  password: yup.string().required('No password provided.').min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  repeatPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
});
 
export default function FakeLogin() {
  

  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
        <Box bg="grey" p={6} rounded="md" w={300} borderRadius={10}>
          <Formik
            initialValues={{
              name: "",
              password: "",
              repeatPassword: "",
              checkbox: false,
              
            }}
            validationSchema={validationSchema} // podpinamy schemat walidacji
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2)); // funkcja uruchamiana przy submicie formularza
            }}
          >

            {({ handleSubmit, errors, touched }) => ( // przekazywanie propsów z formika do komponentu
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
              <FormControl isInvalid={!!errors.name && touched.name}>
                  <FormLabel htmlFor="name">Imię</FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="text"
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.name}</FormErrorMessage>
                </FormControl>


                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="age">Password</FormLabel>
                  <Field
                      as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.repeatPassword && touched.repeatPassword}>
                  <FormLabel htmlFor="age">Password confirm</FormLabel>
                  <Field
                      as={Input}
                    id="repeatPassword"
                    name="repeatPassword"
                    type="password"
                    variant="filled"
                  />

                  <FormErrorMessage>{errors.repeatPassword}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.checkbox && touched.checkbox}>
                  <FormLabel htmlFor="checkbox">Zapamiętaj mnie</FormLabel>
                  <Field
                      as={Input}
                    id="checkbox"
                    name="checkbox"
                    type="checkbox"
                    variant="filled"
                  />

                  <FormErrorMessage>{errors.repeatPassword}</FormErrorMessage>
                </FormControl>

                <Button type="submit" colorScheme="purple" width="full">
                  Zapisz
                </Button>

              </VStack>
            </form>
            )}
          </Formik>
        </Box>
      </Flex>
    );
  
}