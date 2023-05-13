import asyncHandler from 'express-async-handler'

import { prisma } from '../prisma.js'
import { createExercise } from '../utils/exercise.utils.js'

export const setExercise = asyncHandler(async (req, res) => {
	const { name, body_part } = req.body
	const { id } = req.params // Получаем id из URL

	// Проверяем, существует ли уже упражнение с таким же именем
	const isHaveExercise = await prisma.exercise.findUnique({
		where: {
			id: parseInt(id) // Преобразуем строку в число
		}
	})
	if (
		typeof name !== 'string' ||
		!name.trim() ||
		typeof body_part !== 'string' ||
		!body_part.trim()
	) {
		res.status(400)
		throw new Error('Invalid input')
	}

	if (isHaveExercise) {
		res.status(400)
		throw new Error('Exercise already exists')
	}

	// Создаем новое упражнение
	const exercise = await prisma.exercise.create({
		data: {
			name,
			body_part,
			images: []
		},
		select: createExercise
	})

	res.json(exercise)
})
