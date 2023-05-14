import asyncHandler from 'express-async-handler'

import { prisma } from '../prisma.js'
import { createExercise } from '../utils/exercise.utils.js'

export const createNewExercise = asyncHandler(async (req, res) => {
	const { name, times, iconPath } = req.body

	const exercice = await prisma.createExercise({
		data: {
			name,
			times,
			iconPath,
		},
	})
	res.json(exercice)
}