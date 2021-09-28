import { observable, action  } from 'mobx';


var person = observable(
  {
    name: 'Alex',
    zodiac: 'Scorpio',
    gender: 'male',
    dateOfBirth: {
      day: '4',
      month: '11',
      year: '1995'
    },
    timeOfBirth: {
      hour: '14',
      minute: '04',
      format: 'pm'
    },
    maritalStatus: 'single',
    email: 'john.doe@example.com',
    setName(name) {
      this.name = name
    }
  },
  {
    setName: action
  }
)
export default person;