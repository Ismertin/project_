import express from 'express'

import { protect } from '../middleware/auth.middleware.js'

import { createNewExercise } from './exercice.controller.js'

const router = express.Router()

router.route('/exercises').post(protect, createNewExercise)

export default router
