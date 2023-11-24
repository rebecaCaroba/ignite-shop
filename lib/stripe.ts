import Stripe from 'stripe'

export const stripe = new Stripe('sk_test_51OEVZ7CBZOjNmHFIJVA1NdpqFamyF2Hw2eoxq0Yx0ctXr5iGaJSQEoLyXedQ5VJoHv7DBq9RTUqYNtgKx2kbDhYz008Hz9AvT5', {
 apiVersion: '2023-10-16',
 appInfo: {
    name: 'Ignite Shop',
 }
})