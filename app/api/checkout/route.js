import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const { items } = await req.json();

  // Map items to Stripe line items
  const line_items = items.map((item) => ({
    price_data: {
      currency: "aed",
      product_data: {
        name: item.name,
      },
      unit_amount: item.price * 100, 
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items,
    mode: "payment",
    success_url: `${req.headers.get("origin")}/success`,
    cancel_url: `${req.headers.get("origin")}/cancel`,
  });

  return new Response(JSON.stringify({ url: session.url }), {
    status: 200,
  });
}
