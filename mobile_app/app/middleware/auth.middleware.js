import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'

import { generateToken } from '../auth/generate-token.js'
import { prisma } from '../prisma.js'
import { selectUser } from '../utils/user.utils.js'

export const protect = asyncHandler(async (req, res, next) => {
	let token

	if (req.headers.authorization?.startsWith('Bearer')) {
		token = req.headers.authorization.split(' ')[1]

		const decoded = jwt.verify(token, process.env.JWT_SECRET)
		console.log(decoded)

		const userFound = await prisma.user.findUnique({
			where: {
				id: decoded.userId
			},
			select: selectUser
		})

		if (userFound) {
			req.user = userFound
			next()
		} else {
			res.status(401)
			throw new Error('Not authorized, token expired or invalid')
		}
	}

	if (!token) {
		res.status(401)
		throw new Error('Not authorized, no token provided')
	}
})
