import asyncHandler from 'express-async-handler'

import { prisma } from '../prisma.js'
import { selectUser } from '../utils/user.utils.js'

export const getUserProfile = asyncHandler(async (req, res) => {
	const user = await prisma.user.findUnique({
		where: {
			id: req.user.id
		},
		select: selectUser
	})
	res.json(user)
})
