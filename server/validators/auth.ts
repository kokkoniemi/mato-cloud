import Joi from 'joi';

const {
    object, string
} = Joi.types();

export const linkRequestSchema = object.keys({
    email: string.email({ minDomainSegments: 2 }).required()
});

export async function validateCreateLinkRequest(body: Record<string, any>) {
    return linkRequestSchema.validateAsync(body, { stripUnknown: true });
}

export const loginRequestSchema = {
    ...linkRequestSchema,
    loginHash: string.required(),
    fingerprint: string.required()
}

export async function validateLoginRequest(body: Record<string, any>) {
    return loginRequestSchema.validateAsync(body, { stripUnknown: true });
}
