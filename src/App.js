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
  VStack
} from "@chakra-ui/react";
import * as yup from "yup"

const validationSchema=yup.object().shape({
  name: yup.string('To polemusi być napisem').required('To pole jest wymagane').min(5 | "To p[ole musi mieć 5 liter"), 
  age: yup.number('To pole musi byc numerem').min(18).max(99).required(),
  city: yup.string().min(3).required(),
  photo: yup.string(),
  zip: yup.string().length(6)
  .matches(/^[0-9]{2}-[0-9]{3}/)
  .required(),
  telephone: yup.string().matches(/^\+[0-9]{11}/),

});
 
export default function App() {
  

  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
        <Box bg="white" p={6} rounded="md" w={64}>
          <Formik
            initialValues={{
              name: "",
              age: 0,
              city: "",
              volunteer: false,
              photo: "",
              zip:"",
              telephone:""
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

                <FormControl isInvalid={!!errors.age && touched.age}>
                  <FormLabel htmlFor="age">Wiek</FormLabel>
                  <Field
                      as={Input}
                    id="age"
                    name="age"
                    type="number"
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.age}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.city && touched.city}>
                  <FormLabel htmlFor="age">Miasto</FormLabel>
                  <Field
                      as={Input}
                    id="city"
                    name="city"
                    type="text"
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.city}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.volunteer && touched.volunteer}>
                  <FormLabel htmlFor="volunteer">Czy wolontariusz?</FormLabel>
                  <Field
                      as={Input}
                    id="volunteer"
                    name="volunteer"
                    type="text"
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.age}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.photo && touched.photo}>
                  <FormLabel htmlFor="photo">Zdjęcie</FormLabel>
                  <Field
                      as={Input}
                    id="photo"
                    name="photo"
                    type="file"
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.photo}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.zip && touched.zip}>
                  <FormLabel htmlFor="zip">Kod pocztowy</FormLabel>
                  <Field
                      as={Input}
                    id="zip"
                    name="zip"
                    type="text"
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.zip}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.telephone && touched.telephone}>
                  <FormLabel htmlFor="telephone">Telefon</FormLabel>
                  <Field
                      as={Input}
                    id="telephone"
                    name="telephone"
                    type="text"
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.telephone}</FormErrorMessage>
                </FormControl>







                <Button type="submit" colorScheme="purple" width="full">
                  Zamów
                </Button>

              </VStack>
            </form>
            )}
          </Formik>
        </Box>
      </Flex>
    );
  
}
