const plans = [
  {
    "id": "starter",
    "name": "Starter",
    "price": 0,
    "price_formatted": "$0",
    "interval": "forever",
    "billing_period": "forever",
    "description": "For trying out a better way to move ideas forward.",
    "features": [
      "1 active project",
      "Unlimited tasks",
      "Basic collaboration"
    ]
  },
  {
    "id": "pro",
    "name": "Pro",
    "price": null,
    "price_formatted": "Contact sales",
    "interval": "custom",
    "billing_period": "custom",
    "description": "For small teams ready to build with more momentum.",
    "features": [
      "Unlimited projects",
      "Advanced collaboration",
      "Project insights"
    ]
  },
  {
    "id": "scale",
    "name": "Scale",
    "price": 99,
    "price_formatted": "$99",
    "interval": "month",
    "billing_period": "month",
    "description": "For teams that need clarity across every initiative.",
    "features": [
      "Everything in Growth",
      "Unlimited team members",
      "Priority support"
    ]
  },
  {
    "id": "team",
    "name": "Team",
    "price": 149,
    "price_formatted": "$149",
    "interval": "month",
    "billing_period": "month",
    "description": "For growing teams that need more capacity and priority support.",
    "features": [
      "Unlimited projects",
      "10 team members",
      "Priority support"
    ]
  }
];

export async function GET(request) {
  return Response.json({ plans, data: plans });
}
