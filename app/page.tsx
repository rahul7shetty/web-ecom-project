import Image from "next/image"
import Link from "next/link"
import {
  Search,
  Heart,
  ShoppingCart,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Phone,
  Monitor,
  Watch,
  Camera,
  Headphones,
  Gamepad,
} from "lucide-react"
import CountdownTimer from "@/components/countdown-timer"
import ProductCard from "@/components/product-card"
import CategoryCard from "@/components/category-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top bar */}
      <div className="hidden md:flex justify-between items-center bg-black text-white text-xs py-2 px-4 lg:px-20">
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        <div className="flex items-center gap-2">
          <span>English</span>
          <ChevronRight className="h-4 w-4" />
        </div>
      </div>

      {/* Header */}
      <header className="border-b py-4 px-4 lg:px-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/" className="text-xl font-bold">
              Exclusive
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium">
                Home
              </Link>
              <Link href="/contact" className="text-sm font-medium">
                Contact
              </Link>
              <Link href="/about" className="text-sm font-medium">
                About
              </Link>
              <Link href="/sign-up" className="text-sm font-medium">
                Sign Up
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-md px-3 py-1.5">
              <Input
                type="text"
                placeholder="What are you looking for?"
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-sm h-8 w-40 lg:w-60"
              />
              <Search className="h-4 w-4 text-gray-500" />
            </div>
            <button className="p-1">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-1">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-4 lg:px-20 py-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="hidden md:block md:col-span-1 border-r pr-4">
            <nav className="flex flex-col space-y-3 text-sm">
              <Link href="#" className="hover:text-red-500">
                Woman's Fashion
              </Link>
              <Link href="#" className="hover:text-red-500">
                Men's Fashion
              </Link>
              <Link href="#" className="hover:text-red-500">
                Electronics
              </Link>
              <Link href="#" className="hover:text-red-500">
                Home & Lifestyle
              </Link>
              <Link href="#" className="hover:text-red-500">
                Medicine
              </Link>
              <Link href="#" className="hover:text-red-500">
                Sports & Outdoor
              </Link>
              <Link href="#" className="hover:text-red-500">
                Baby's & Toys
              </Link>
              <Link href="#" className="hover:text-red-500">
                Groceries & Pets
              </Link>
              <Link href="#" className="hover:text-red-500">
                Health & Beauty
              </Link>
            </nav>
          </div>

          <div className="md:col-span-3 relative bg-black text-white rounded-lg overflow-hidden">
            <div className="relative h-[300px] md:h-[400px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=1920&auto=format&fit=crop"
                alt="iPhone Promotion"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <Image
                    src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg"
                    alt="Apple"
                    width={40}
                    height={40}
                  />
                  <span>iPhone 14 Series</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Up to 10% <br />
                  off Voucher
                </h1>
                <Button variant="link" className="text-white w-fit p-0 flex items-center gap-2 underline">
                  Shop Now <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
              {[1, 2, 3, 4, 5].map((dot) => (
                <span
                  key={dot}
                  className={`block h-2 w-2 rounded-full ${dot === 1 ? "bg-red-500" : "bg-gray-400"}`}
                ></span>
              ))}
            </div>
          </div>
        </section>

        {/* Flash Sales Section */}
        <section className="px-4 lg:px-20 py-8">
          <div className="flex items-center mb-6">
            <div className="w-5 h-10 bg-red-500 mr-2"></div>
            <h2 className="text-xl font-semibold">Flash Sales</h2>
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-6">
              <h3 className="text-lg font-medium">On Sale Now</h3>
              <div className="flex gap-4">
                <CountdownTimer days={3} hours={23} minutes={19} seconds={56} />
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <ProductCard
              image="https://images.unsplash.com/photo-1605773527852-c546a8584ea3?q=80&w=500&auto=format&fit=crop"
              title="HAVIT HV-G92 Gamepad"
              price={120}
              discountedPrice={60}
              discount={50}
              rating={5}
              reviewCount={88}
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=500&auto=format&fit=crop"
              title="AK-900 Wired Keyboard"
              price={160}
              discountedPrice={100}
              discount={35}
              rating={4}
              reviewCount={75}
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1616763355548-1b606f439f86?q=80&w=500&auto=format&fit=crop"
              title="IPS LCD Gaming Monitor"
              price={400}
              discountedPrice={370}
              discount={8}
              rating={4.5}
              reviewCount={99}
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=500&auto=format&fit=crop"
              title="S-Series Comfort Chair"
              price={400}
              discountedPrice={375}
              discount={6}
              rating={4.5}
              reviewCount={99}
            />
            <div className="hidden xl:block">
              <ProductCard
                image="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=500&auto=format&fit=crop"
                title="Modern Desk Lamp"
                price={50}
                discountedPrice={35}
                discount={30}
                rating={4}
                reviewCount={65}
              />
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Button className="bg-red-500 hover:bg-red-600 text-white rounded-md">View All Products</Button>
          </div>
        </section>

        {/* Categories Section */}
        <section className="px-4 lg:px-20 py-8">
          <div className="flex items-center mb-6">
            <div className="w-5 h-10 bg-red-500 mr-2"></div>
            <h2 className="text-xl font-semibold">Browse By Category</h2>
          </div>

          <div className="flex justify-between items-center mb-6">
            <div></div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <CategoryCard icon={<Phone className="h-6 w-6" />} title="Phones" />
            <CategoryCard icon={<Monitor className="h-6 w-6" />} title="Computers" />
            <CategoryCard icon={<Watch className="h-6 w-6" />} title="SmartWatches" />
            <CategoryCard icon={<Camera className="h-6 w-6" />} title="Cameras" active />
            <CategoryCard icon={<Headphones className="h-6 w-6" />} title="HeadPhones" />
            <CategoryCard icon={<Gamepad className="h-6 w-6" />} title="Gaming" />
          </div>
        </section>

        {/* Best Selling Products */}
        <section className="px-4 lg:px-20 py-8">
          <div className="flex items-center mb-6">
            <div className="w-5 h-10 bg-red-500 mr-2"></div>
            <h2 className="text-xl font-semibold">Best Selling Products</h2>
          </div>

          <div className="flex justify-between items-center mb-6">
            <div></div>
            <Button className="bg-red-500 hover:bg-red-600 text-white rounded-md">View All</Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <ProductCard
              image="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=500&auto=format&fit=crop"
              title="The north coat"
              price={260}
              discountedPrice={210}
              discount={20}
              rating={5}
              reviewCount={65}
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=500&auto=format&fit=crop"
              title="Gucci duffle bag"
              price={960}
              discountedPrice={860}
              discount={10}
              rating={4.5}
              reviewCount={65}
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=500&auto=format&fit=crop"
              title="RGB liquid CPU Cooler"
              price={160}
              discountedPrice={120}
              discount={25}
              rating={4.5}
              reviewCount={65}
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1593085260707-5377ba37f868?q=80&w=500&auto=format&fit=crop"
              title="Small BookShelf"
              price={360}
              discountedPrice={260}
              discount={28}
              rating={5}
              reviewCount={65}
            />
          </div>
        </section>

        {/* Music Experience Banner */}
        <section className="px-4 lg:px-20 py-8">
          <div className="bg-black text-white rounded-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h3 className="text-green-500 mb-4">Categories</h3>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Enhance Your
                  <br />
                  Music Experience
                </h2>
                <div className="flex gap-2 mb-8">
                  {[1, 2, 3, 4].map((dot) => (
                    <span
                      key={dot}
                      className={`block h-3 w-3 rounded-full ${dot === 1 ? "bg-red-500" : "bg-white"}`}
                    ></span>
                  ))}
                </div>
                <Button className="bg-green-500 hover:bg-green-600 text-white">Buy Now!</Button>
              </div>
              <div className="relative h-[200px] w-[200px] md:h-[250px] md:w-[250px]">
                <Image
                  src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=500&auto=format&fit=crop"
                  alt="Speaker"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Explore Products */}
        <section className="px-4 lg:px-20 py-8">
          <div className="flex items-center mb-6">
            <div className="w-5 h-10 bg-red-500 mr-2"></div>
            <h2 className="text-xl font-semibold">Explore Our Products</h2>
          </div>

          <div className="flex justify-between items-center mb-6">
            <div></div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <ProductCard
              image="https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?q=80&w=500&auto=format&fit=crop"
              title="Breed Dry Dog Food"
              price={100}
              discountedPrice={80}
              discount={20}
              rating={5}
              reviewCount={35}
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500&auto=format&fit=crop"
              title="CANON EOS DSLR Camera"
              price={360}
              discountedPrice={260}
              discount={28}
              rating={4.7}
              reviewCount={95}
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=500&auto=format&fit=crop"
              title="ASUS FHD Gaming Laptop"
              price={700}
              discountedPrice={600}
              discount={14}
              rating={4.9}
              reviewCount={325}
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?q=80&w=500&auto=format&fit=crop"
              title="Curology Product Set"
              price={500}
              discountedPrice={400}
              discount={20}
              rating={4.3}
              reviewCount={145}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            <ProductCard
              image="https://images.unsplash.com/photo-1594787318286-3d835c1d207f?q=80&w=500&auto=format&fit=crop"
              title="Kids Electric Car"
              price={960}
              discountedPrice={800}
              discount={17}
              rating={5}
              reviewCount={65}
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=500&auto=format&fit=crop"
              title="Jr. Zoom Soccer Cleats"
              price={1160}
              discountedPrice={960}
              discount={17}
              rating={4.5}
              reviewCount={35}
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=500&auto=format&fit=crop"
              title="GP11 Shooter USB Gamepad"
              price={660}
              discountedPrice={550}
              discount={17}
              rating={4.5}
              reviewCount={55}
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=500&auto=format&fit=crop"
              title="Quilted Satin Jacket"
              price={660}
              discountedPrice={550}
              discount={17}
              rating={4.8}
              reviewCount={55}
            />
          </div>

          <div className="flex justify-center mt-8">
            <Button className="bg-red-500 hover:bg-red-600 text-white rounded-md">View All Products</Button>
          </div>
        </section>

        {/* New Arrival */}
        <section className="px-4 lg:px-20 py-8">
          <div className="flex items-center mb-6">
            <div className="w-5 h-10 bg-red-500 mr-2"></div>
            <h2 className="text-xl font-semibold">New Arrival</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 md:row-span-2 bg-black text-white rounded-lg overflow-hidden relative h-[300px] md:h-full">
              <Image
                src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=800&auto=format&fit=crop"
                alt="PlayStation 5"
                fill
                className="object-cover opacity-70"
              />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-xl font-bold mb-2">PlayStation 5</h3>
                <p className="text-sm mb-4">Black and White version of the PS5 coming out on sale.</p>
                <Button variant="link" className="text-white p-0 underline">
                  Shop Now
                </Button>
              </div>
            </div>

            <div className="bg-black text-white rounded-lg overflow-hidden relative h-[200px]">
              <Image
                src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=600&auto=format&fit=crop"
                alt="Women's Collections"
                fill
                className="object-cover opacity-70"
              />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-lg font-bold mb-1">Women's Collections</h3>
                <p className="text-xs mb-2">Featured woman collections that give you another vibe.</p>
                <Button variant="link" className="text-white p-0 underline text-sm">
                  Shop Now
                </Button>
              </div>
            </div>

            <div className="bg-black text-white rounded-lg overflow-hidden relative h-[200px]">
              <Image
                src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=600&auto=format&fit=crop"
                alt="Speakers"
                fill
                className="object-cover opacity-70"
              />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-lg font-bold mb-1">Speakers</h3>
                <p className="text-xs mb-2">Amazon wireless speakers for premium sound.</p>
                <Button variant="link" className="text-white p-0 underline text-sm">
                  Shop Now
                </Button>
              </div>
            </div>

            <div className="bg-black text-white rounded-lg overflow-hidden relative h-[200px]">
              <Image
                src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=600&auto=format&fit=crop"
                alt="Perfume"
                fill
                className="object-cover opacity-70"
              />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-lg font-bold mb-1">Perfume</h3>
                <p className="text-xs mb-2">GUCCI INTENSE OUD EDP for an exquisite fragrance experience.</p>
                <Button variant="link" className="text-white p-0 underline text-sm">
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="px-4 lg:px-20 py-8 border-t">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-100 rounded-full p-4 mb-4">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 6V12L16 14"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">FREE AND FAST DELIVERY</h3>
              <p className="text-sm text-gray-500">Free delivery for all orders over $140</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-100 rounded-full p-4 mb-4">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M12 16V16.01" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 8V12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">24/7 CUSTOMER SERVICE</h3>
              <p className="text-sm text-gray-500">Friendly 24/7 customer support</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-100 rounded-full p-4 mb-4">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 12V22H4V12"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 7H2V12H22V7Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M12 22V7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">MONEY BACK GUARANTEE</h3>
              <p className="text-sm text-gray-500">We return money within 30 days</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white px-4 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-6">Exclusive</h3>
            <h4 className="font-medium mb-4">Subscribe</h4>
            <p className="text-sm mb-4">Get 10% off your first order</p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-gray-600 rounded-r-none"
              />
              <Button className="bg-white text-black hover:bg-gray-200 rounded-l-none">Subscribe</Button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Support</h3>
            <ul className="space-y-4 text-sm">
              <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Account</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/account">My Account</Link>
              </li>
              <li>
                <Link href="/login">Login / Register</Link>
              </li>
              <li>
                <Link href="/cart">Cart</Link>
              </li>
              <li>
                <Link href="/wishlist">Wishlist</Link>
              </li>
              <li>
                <Link href="/shop">Shop</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Link</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms Of Use</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">© 2023 Exclusive. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-gray-400">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 8H14C13.4696 8 12.9609 8.21071 12.5858 8.58579C12.2107 8.96086 12 9.46957 12 10V22"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M8 14H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="#" className="text-sm text-gray-400">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M8 3V7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 3V7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 8H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect
                  x="8"
                  y="11"
                  width="8"
                  height="8"
                  rx="1"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link href="#" className="text-sm text-gray-400">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
