import express from 'express'

import { setExercise } from './create.exercise.js'

const router = express.Router()

router.route('/new_exercise').post(setExercise)

export default router
