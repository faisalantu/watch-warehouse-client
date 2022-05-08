import React from "react";

const Blog = () => {
  return (
    <div className='container mx-auto p3 text-lg my-10 md:my-20'>
      <div className='w-8/12 mx-auto'>
        <h1 className='font-semibold text-3xl mb-4'>
          Difference between Javascript and Node JS
        </h1>
        <p className='mb-4'>
          <b>NodeJS: </b> NodeJS is a cross-platform and opensource Javascript
          runtime environment that allows the javascript to be run on the
          server-side. Nodejs allows Javascript code to run outside the browser.
          Nodejs comes with a lot of modules and mostly used in web development.{" "}
          <br /> <br />
          <b>Javascript: </b> Javascript is a Scripting language. It is mostly
          abbreviated as JS. It can be said that Javascript is the updated
          version of the ECMA script. Javascript is a high-level programming
          language that uses the concept of Oops but it is based on prototype
          inheritance. Some of the javascript frameworks are RamdaJS, TypedJS,
          etc.
        </p>
      </div>
      <div className='w-8/12 mx-auto my-10'>
        <h1 className='font-semibold text-3xl mb-4'>
          When should you use nodejs and when should you use mongodb
        </h1>
        <p className='mb-4'>
          We should use for well suited applications that have a lot of
          concurrent connections and each request only needs very few CPU
          cycles, because the event loop (with all the other clients) is blocked
          during execution of a function. Node.js is best suited for real-time
          applications other than that we can also use it for collaboration
          tools, chat rooms, or anything where what one user (or robot? or
          sensor?) does with the application needs to be seen by other users
          immediately, without a page refresh.
          <br /> <br />
          NoSQL databases like MongoDB are a good choice when your data is
          document-centric and doesn’t fit well into the schema of a relational
          database, when you need to accommodate massive scale, when you are
          rapidly prototyping.
        </p>
      </div>
      <div className='w-8/12 mx-auto'>
        <h1 className='font-semibold text-3xl mb-4'>
          Differences between SQL and NoSQL databases
        </h1>
        <div className='mb-4'>
          <b className='mb-2'>The key differences are</b>
          <ul>
            <ol>
              1. SQL databases are relational, NoSQL databases are
              non-relational.
            </ol>
            <ol>
              2. SQL databases use structured query language and have a
              predefined schema. NoSQL databases have dynamic schemas for
              unstructured data.
            </ol>
            <ol>
              3. SQL databases are vertically scalable, while NoSQL databases
              are horizontally scalable.
            </ol>
            <ol>
              4. SQL databases are table-based, while NoSQL databases are
              document, key-value, graph, or wide-column stores.
            </ol>
            <ol>
              5. SQL databases are better for multi-row transactions, while
              NoSQL is better for unstructured data like documents or JSON.
            </ol>
          </ul>
        </div>
      </div>
      <div className='w-8/12 mx-auto'>
        <h1 className='font-semibold text-3xl mb-4'>
          What is the purpose of JWT and how does it work?
        </h1>
        <p className='mb-4'>
          JWT can be used as an access token to prevent unwanted access to a
          protected resource. They're often used as Bearer tokens, which the API
          will decode and validate before sending a response.
          <br />
          Although JWTs can be encrypted to also provide secrecy between
          parties, we will focus on signed tokens. Signed tokens can verify the
          integrity of the claims contained within it, while encrypted tokens
          hide those claims from other parties. When tokens are signed using
          public/private key pairs, the signature also certifies that only the
          party holding the private key is the one that signed it.
          <br /> <br />
          <b>how does it work?</b>
          <br />
          In authentication, when the user successfully logs in using their
          credentials, a JSON Web Token will be returned. Since tokens are
          credentials, great care must be taken to prevent security issues. In
          general, you should not keep tokens longer than required.
          <br />
          Whenever the user wants to access a protected route or resource, the
          user agent should send the JWT, typically in the Authorization header
          using the Bearer schema. The content of the header should look like
          the following:
        </p>
      </div>
    </div>
  );
};

export default Blog;
