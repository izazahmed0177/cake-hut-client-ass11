import React from 'react';

const Blog = () => {
    return (
        <div>


<section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-100">



      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">Databases</span>
          <span className="mt-1 text-gray-500 text-sm">12 Aug 2022</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">1. Difference between SQL and NoSQL ?</h2>
          <p className="leading-relaxed">When it comes to choosing a database the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both the databases are viable options still there are certain key differences between the two that users must keep in mind when making a decision. </p>
          <p>The Main Differences: </p>
          <h1>1.Type –</h1>
          <p>SQL databases are primarily called as Relational Databases RDBMS; whereas NoSQL database are primarily called as non-relational or distributed database. </p>
          <h1>2.Language – </h1>
          <p>SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system. 
A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go. </p>
          
        </div>
      </div>



      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">CATEGORY</span>
          <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">2. What is JWT, and how does it work ?</h2>
          <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
         
        </div>
      </div>




      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">CATEGORY</span>
          <span className="text-sm text-gray-500">12 Jun 2019</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">3. What is the difference between javascript and NodeJS ?</h2>
          <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
        
        </div>
      </div>


      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">CATEGORY</span>
          <span className="text-sm text-gray-500">12 Jun 2019</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">4. How does NodeJS handle multiple requests at the same time ?</h2>
          <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
        
        </div>
      </div>




    </div>
  </div>
</section>
            




        </div>
    );
};

export default Blog;