import { NextResponse } from "next/server";

const products = [
    {
        id: 1,
        name: "Trenton modular sofa_3",
        price: "Rs. 25,000.00",
        image: "https://res.cloudinary.com/dbwe30r1t/image/upload/v1735593568/pro1_kjbi9u.png",
      },
      {
        id: 2,
        name: "Granite dining table with dining chair",
        price: "Rs. 25,000.00",
        image: "https://res.cloudinary.com/dbwe30r1t/image/upload/v1735593714/pro2_e5j4gm.png",
      },
      {
        id: 3,
        name: "Outdoor bar table and stool",
        price: "Rs. 25,000.00",
        image: "https://res.cloudinary.com/dbwe30r1t/image/upload/v1735593830/pro3_tprmja.png",
      },
      {
        id: 4,
        name: "Plain console with teak mirror",
        price: "Rs. 25,000.00",
        image: "https://res.cloudinary.com/dbwe30r1t/image/upload/v1735593878/pro4_rfrsvc.png",
      },
      {
        id: 5,
        name: "Grain coffee table",
        price: "Rs. 15,000.00",
        image: "https://res.cloudinary.com/dbwe30r1t/image/upload/v1735594146/shoppic1_y9l4u1.png",
      },
      {
        id: 6,
        name: "Kent coffee table",
        price: "Rs. 225,000.00",
        image: "https://res.cloudinary.com/dbwe30r1t/image/upload/v1735594177/shoppic2_murpsh.png",
      },
      {
        id: 7,
        name: "Round coffee table_color 2",
        price: "Rs. 251,000.00",
        image: "https://res.cloudinary.com/dbwe30r1t/image/upload/v1735594214/shoppic3_zsrmdu.png",
      },
      {
        id: 8,
        name: "Reclaimed teak coffee table",
        price: "Rs. 25,200.00",
        image: "https://res.cloudinary.com/dbwe30r1t/image/upload/v1735594250/shoppic4_ulekuu.png",
      },
      {
        id: 9,
        name: "Plain console",
        price: "Rs. 258,200.00",
        image: "https://res.cloudinary.com/dbwe30r1t/image/upload/v1735594447/shppic1_amfkmx.png",
      },
      {
        id: 10,
        name: "Reclaimed teak Sideboard",
        price: "Rs. 20,000.00",
        image: "https://res.cloudinary.com/dbwe30r1t/image/upload/v1735594506/shppic2_wdhfps.png",
      },
      {
        id: 11,
        name: "SJP_0825 ",
        price: "Rs. 200,000.00",
        image: "https://res.cloudinary.com/dbwe30r1t/image/upload/v1735594544/shppic3_snjfag.png",
      },
      {
        id: 12,
        name: "Bella chair and table",
        price: "Rs. 100,000.00",
        image: "https://res.cloudinary.com/dbwe30r1t/image/upload/v1735594576/shppic4_qcfixy.png",
      },
      {
        id: 13,
        name: "Granite square side table",
        price: "Rs. 258,800.00",
        image: "https://res.cloudinary.com/dbwe30r1t/image/upload/v1735594641/shpic1_mzwzwi.png",
      },
      {
        id: 14,
        name: "Asgaard sofa",
        price: "Rs. 250,000.00",
        image: "https://res.cloudinary.com/dbwe30r1t/image/upload/v1735594679/shpic2_nblmqd.png",
      },
      {
        id: 15,
        name: "Maya sofa three seater",
        price: "Rs. 115,000.00",
        image: "https://res.cloudinary.com/dbwe30r1t/image/upload/v1735594713/shpic3_gkx9ah.png",
      },
      {
        id: 16,
        name: "Outdoor sofa set",
        price: "Rs. 244,000.00",
        image: "https://res.cloudinary.com/dbwe30r1t/image/upload/v1735594746/shpic4_fejv6s.png",
      },
];

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
