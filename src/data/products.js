const p = (id, name, category, tag, rmb, desc, images, options) => ({
  id,
  name,
  category,
  tag,
  basePriceRMB: rmb,
  convertedPrices: {
    USD: +(rmb * 0.14).toFixed(2),
    GBP: +(rmb * 0.11).toFixed(2),
    CAD: +(rmb * 0.19).toFixed(2),
    AUD: +(rmb * 0.21).toFixed(2)
  },
  description: desc,
  images,
  options
});

export const products = [
  p('1','Minimalist Pearl Necklace','Jewelry','Hot',129,'Elegant lightweight necklace for daily styling.',['https://picsum.photos/seed/chinabuy1/900/700','https://picsum.photos/seed/chinabuy1b/900/700'],{color:['Gold','Silver'],size:['One Size']}),
  p('2','Ceramic Storage Jar Set','Home Goods','Best Seller',168,'Modern kitchen storage jars with bamboo lids.',['https://picsum.photos/seed/chinabuy2/900/700','https://picsum.photos/seed/chinabuy2b/900/700'],{color:['White','Cream'],size:['3pcs']}),
  p('3','Portable Pet Water Bottle','Pet Supplies','New',79,'Leak-proof travel bottle for dogs and cats.',['https://picsum.photos/seed/chinabuy3/900/700','https://picsum.photos/seed/chinabuy3b/900/700'],{color:['Blue','Pink','Gray'],size:['300ml','500ml']}),
  p('4','Magnetic Car Phone Mount','Auto Accessories','Hot',59,'Strong magnet dashboard mount with 360° rotation.',['https://picsum.photos/seed/chinabuy4/900/700','https://picsum.photos/seed/chinabuy4b/900/700'],{color:['Black'],size:['Standard']}),
  p('5','Smart Desk LED Lamp','Trendy Gadgets','Best Seller',199,'Dimmable eye-care lamp with USB charging port.',['https://picsum.photos/seed/chinabuy5/900/700','https://picsum.photos/seed/chinabuy5b/900/700'],{color:['White','Black'],size:['CN Plug']}),
  p('6','Silk Scrunchie 5-Pack','Jewelry','New',45,'Soft silk hair ties with no hair pulling.',['https://picsum.photos/seed/chinabuy6/900/700','https://picsum.photos/seed/chinabuy6b/900/700'],{color:['Mixed'],size:['5-Pack']}),
  p('7','Nordic Throw Pillow Cover','Home Goods','Hot',38,'Textured decorative cushion cover set.',['https://picsum.photos/seed/chinabuy7/900/700','https://picsum.photos/seed/chinabuy7b/900/700'],{color:['Beige','Olive','Rust'],size:['45x45cm']}),
  p('8','Pet Grooming Glove','Pet Supplies','Best Seller',29,'Gentle deshedding glove for home pet care.',['https://picsum.photos/seed/chinabuy8/900/700','https://picsum.photos/seed/chinabuy8b/900/700'],{color:['Gray','Blue'],size:['One Size']}),
  p('9','Car Trunk Organizer','Auto Accessories','New',109,'Foldable organizer keeps your trunk tidy.',['https://picsum.photos/seed/chinabuy9/900/700','https://picsum.photos/seed/chinabuy9b/900/700'],{color:['Black','Brown'],size:['Large']}),
  p('10','Mini Wireless Label Printer','Trendy Gadgets','Hot',219,'Bluetooth thermal printer for labels and notes.',['https://picsum.photos/seed/chinabuy10/900/700','https://picsum.photos/seed/chinabuy10b/900/700'],{color:['Green','White'],size:['Standard']}),
  p('11','Gold Hoop Earrings','Jewelry','Best Seller',66,'Classic hypoallergenic hoops in two finishes.',['https://picsum.photos/seed/chinabuy11/900/700','https://picsum.photos/seed/chinabuy11b/900/700'],{color:['Gold','Silver'],size:['Small','Medium']}),
  p('12','Bamboo Tea Tray Set','Home Goods','New',258,'Tea serving tray set for modern homes.',['https://picsum.photos/seed/chinabuy12/900/700','https://picsum.photos/seed/chinabuy12b/900/700'],{color:['Natural'],size:['Set']}),
];

export const categories = ['All','Jewelry','Home Goods','Pet Supplies','Auto Accessories','Trendy Gadgets'];
