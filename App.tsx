import { Formik, validateYupSchema } from "formik"
import React, { useState } from "react"
import { SafeAreaView,  ScrollView,  StyleSheet,  Text, TextInput, TouchableOpacity, View } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox"

// Form Validation
import * as yup from 'yup'

// Yup is a package which is used for validation

const PasswordSchema = yup.object().shape({
  passwordLength: yup.number().min(4, 'Should be min of 4 characters').max(16,'Should be max of 16 characters').required("This field is required")
})

const App = ()=> {
  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)

  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  const generatePasswordString = (passwordLength: number)=> {
    let characterList = ''
    const upperCaseChars = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    const lowerCaseChars = 'qwertyuiopasdfghjklzxcvbnm';
    const digitChars = '1234567890';
    const specialChars = '!@#$%^&*()_+';

    if (upperCase) {
      characterList += upperCaseChars
    }
    if (lowerCase) {
      characterList += lowerCaseChars
    }
    if (numbers) {
      characterList += digitChars
    }
    if (symbols) {
      characterList += specialChars
    }

    const passwordResult = createPassword(characterList, passwordLength)
    console.log(passwordResult)

    setPassword(passwordResult)
    setIsPassGenerated(true)
  }

  const createPassword = (characters: string, passwordLength: number) => {
    let result  = ''

    for (let i=0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex)
    }

    return result;
  }

  const resetPassword = () => {
    setPassword("")
    setIsPassGenerated(false)
    setNumbers(false)
    setSymbols(false)
    setLowerCase(false)
    setUpperCase(false)
  }

  console.log('this is pass',password)

  return (
    <ScrollView keyboardShouldPersistTaps='handled'>
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik 
          initialValues={{passwordLength:""}}
          validationSchema={PasswordSchema}
          onSubmit={ values => {
            console.log(values)
            generatePasswordString(Number(values.passwordLength))
          }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset
            }) => (
              <>
              <View style={styles.inputWrapper}>
                <View style={styles.inputColumn}>
                  <Text style={styles.heading}>Password Length</Text>
                  {touched.passwordLength && errors.passwordLength && (
                    <Text style={styles.errorText}>{errors.passwordLength}</Text>
                  )}
                </View>
                <TextInput 
                  style={styles.inputStyle}
                  value={values.passwordLength}
                  onChangeText={handleChange('passwordLength')}
                  placeholder="Example. 8"
                  keyboardType="number-pad"
                  />
              </View>

              <View style={styles.inputWrapper}>
                <Text>Include Upper Case</Text>
                <BouncyCheckbox 
                disableBuiltInState
                isChecked={upperCase}
                onPress={()=> setUpperCase(!upperCase)}
                fillColor="#C9A0DC"
                />
              </View>

              <View style={styles.inputWrapper}>
                <Text>Include Lower Case</Text>
                <BouncyCheckbox 
                disableBuiltInState
                isChecked={lowerCase}
                onPress={()=> setLowerCase(!lowerCase)}
                fillColor="#FED85D"
                />
              </View>

              <View style={styles.inputWrapper}>
                <Text>Include Digits</Text>
                <BouncyCheckbox 
                disableBuiltInState
                isChecked={numbers}
                onPress={()=> setNumbers(!numbers)}
                fillColor="#C9A0DC"
                />
              </View>

              <View style={styles.inputWrapper}>
                <Text>Include Special Characters</Text>
                <BouncyCheckbox 
                disableBuiltInState
                isChecked={symbols}
                onPress={()=> setSymbols(!symbols)}
                fillColor="#FC80A5"
                />
              </View>

              <View style={styles.formActions}>
                <TouchableOpacity
                disabled={!isValid}
                style={styles.primaryBtn}
                onPress={handleSubmit}
                >
                  <Text style={styles.primaryBtnTxt}>Generate Password</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.secondaryBtn}
                onPress={()=>{
                  handleReset()
                }}
                ><Text>Reset</Text></TouchableOpacity>
              </View>
              </>
            )}
          </Formik>
        </View>
        {isPassGenerated ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}></Text>
            <Text style={styles.description}>Long press to copy</Text>
            <Text style={styles.generatedPassword} selectable>{password}</Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color:'#000'
  },
});

export default App