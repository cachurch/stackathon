'use strict'

const db = require('../server/db')
const {
  User,
  Patient,
  PatientBehavior,
  Treatment,
  MoodScale
} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      firstName: 'Chelsea',
      lastName: 'Church',
      email: 'chelsea@email.com',
      password: '123',
      postalCode: 11206
    }),
    User.create({
      firstName: 'John',
      lastName: 'Wick',
      email: 'john@email.com',
      password: '123',
      postalCode: 10003
    })
  ])

  const patients = await Promise.all([
    Patient.create({
      name: 'Jack Donaghy',
      age: 82,
      medicalHistory:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      notes:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }),
    Patient.create({
      name: 'Liz Lemon',
      age: 75,
      medicalHistory:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      notes:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }),
    Patient.create({
      name: 'Tracy Jordan',
      age: 72,
      medicalHistory:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      notes:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    })
  ])

  const treatments = await Promise.all([
    Treatment.create({
      treatmentType: 'Medication',
      medName: 'donepezil',
      behavioralName: '',
      doseage: 25,
      timeAdministered: 12,
      notes: 'Patient had increased difficulty swallowing pill this AM.'
    }),
    Treatment.create({
      treatmentType: 'Behavioral Therapy',
      medName: '',
      behavioralName: '20 Minutes of walking outside',
      timeAdministered: 9,
      notes: 'Was noticibly sharper after time exercising outside'
    })
  ])

  const behaviors = await Promise.all([
    PatientBehavior.create({
      patientId: 1,
      treatmentId: 2
    }),
    PatientBehavior.create({
      patientId: 3,
      treatmentId: 1
    })
  ])

  const moods = await Promise.all([
    MoodScale.create({
      mood: 1
    }),
    MoodScale.create({
      mood: 5
    }),
    MoodScale.create({
      mood: 3
    }),
    MoodScale.create({
      mood: 2
    }),
    MoodScale.create({
      mood: 1
    }),
    MoodScale.create({
      mood: 5
    }),
    MoodScale.create({
      mood: 3
    }),
    MoodScale.create({
      mood: 2
    }),
    MoodScale.create({
      mood: 2
    }),
    MoodScale.create({
      mood: 5
    }),
    MoodScale.create({
      mood: 2
    }),
    MoodScale.create({
      mood: 2
    }),
    MoodScale.create({
      mood: 1
    }),
    MoodScale.create({
      mood: 5
    }),
    MoodScale.create({
      mood: 1
    }),
    MoodScale.create({
      mood: 1
    }),
    MoodScale.create({
      mood: 5
    }),
    MoodScale.create({
      mood: 5
    }),
    MoodScale.create({
      mood: 1
    }),
    MoodScale.create({
      mood: 5
    }),
    MoodScale.create({
      mood: 1
    }),
    MoodScale.create({
      mood: 2
    }),
    MoodScale.create({
      mood: 3
    }),
    MoodScale.create({
      mood: 3
    }),
    MoodScale.create({
      mood: 1
    }),
    MoodScale.create({
      mood: 2
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${patients.length} patients`)
  console.log(`seeded ${behaviors.length} behaviors`)
  console.log(`seeded ${treatments.length} treatments`)
  console.log(`seeded ${moods.length} moods`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
