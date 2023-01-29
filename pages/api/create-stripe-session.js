
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)


export default async (req,res) => {
    const { items, email} = req.body;
    console.log('reqb',req.body)
    const transformedItems = items.map(item => ({
        description:item.description,
        quantity:1,
        price_data: {
            currency: 'INR',
            unit_amount:item.price * 100,
            product_data:{
                name:item.title,
                images:[item.image],
            }
        }
    }))

    console.log('transformedItems',transformedItems)

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        shipping_rates:['shr_1MSGhwSEZbNosnclKA2f7hmU'],
        shipping_address_collection:{
         allowed_countries:["IN"]
        },
        line_items:transformedItems,
        mode:'payment',
        success_url:`${process.env.HOST}/success`,
        cancel_url:`${process.env.HOST}/cart`,
        metadata:{
            email,
            images:JSON.stringify(items.map(item => item.image))
        }
    })

    res.status(200).json({id:session.id })
};