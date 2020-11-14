import * as z from 'zod'

const atAgencySchema = z
  .object({
    agencyId: z.string(),
    market: z.enum(['X', 'Y', 'Z']),
    name: z.string(),
  })


const record = { agencyId: 'id', market: 'Y', name: 'yo', skills: ['1'] }

atAgencySchema.parse(record) // throws "Expected never, received array"

console.log('success !')