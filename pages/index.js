import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard'
import helper from '../helper'
export default function Home({
  exploreData,
  someData: { age, price },
} = props) {
  return (
    <div>
      <Head>
        <title>Airbnb - clone</title>
        <link
          rel="icon"
          href="https://seeklogo.com/images/A/airbnb-logo-1D03C48906-seeklogo.com.png"
        />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto py-2">
        {/* Small Card Container */}
        <div>
          <h1 className="text-4xl font-semibold my-6">Where to go</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {exploreData.map(({ name, distance, image }, i) => (
              <SmallCard
                key={i}
                name={name}
                distance={distance}
                image={image}
              />
            ))}
          </div>
        </div>
        {/* Medium Card Container */}
        <div>
          <h1 className="text-4xl font-semibold my-6">Live anywhere</h1>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const data = await fetch(`${helper.jsonkeeperFinal}`).then((data) =>
    data.json()
  )
  return {
    props: { exploreData: data, someData: { age: 25, price: 10 } },
  }
}
