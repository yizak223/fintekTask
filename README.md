
<body>
    <h1>Weather App</h1>
    <h2>Overview</h2>
    <p>The Weather App is a full-stack application that allows users to get current weather information for a city of their choice. The application consists of a client-side built with React and Vite, and a server-side built with Node.js and Express.</p>
    <h2>Project Structure</h2>
    <p>The project is organized into three main directories:</p>
    <ul>
        <li><strong><code>client</code></strong>: Contains the React application built with Vite.</li>
        <li><strong><code>server</code></strong>: Contains the Node.js server with Express that handles API requests.</li>
        <li><strong><code>fintek-task</code></strong>: The root directory that manages the client and server with <code>concurrently</code>.</li>
    </ul>
    <h2>Installation</h2>
    <p>To get started with this project, follow these steps:</p>
    <ol>
        <li><strong>Clone the Repository</strong>
            <pre><code>git clone &lt;repository-url&gt;
cd fintek-task</code></pre>
        </li>
        <li><strong>Install Dependencies</strong>
            <ul>
                <li>For the root directory:
                    <pre><code>npm install</code></pre>
                </li>
                <li>For the client:
                    <pre><code>cd client
npm install</code></pre>
                </li>
                <li>For the server:
                    <pre><code>cd ../server
npm install</code></pre>
                </li>
            </ul>
        </li>
    </ol>
    <h2>Running the Application</h2>
    <p>To run both the client and server concurrently, use the following command in the root directory:</p>
    <pre><code>npm run dev</code></pre>
    <p>This command will start both the React client and the Express server simultaneously.</p>
    <h2>Client-Side</h2>
    <p>The client-side application is built with:</p>
    <ul>
        <li><strong>React</strong>: A JavaScript library for building user interfaces.</li>
        <li><strong>Vite</strong>: A build tool that provides a fast development environment.</li>
    </ul>
    <h3>Client Scripts</h3>
    <ul>
        <li><code>npm run dev</code>: Starts the development server.</li>
        <li><code>npm run build</code>: Builds the application for production.</li>
        <li><code>npm run lint</code>: Lints the codebase using ESLint.</li>
        <li><code>npm run preview</code>: Previews the built application.</li>
        <li><code>npm run start</code>: Starts a preview server on port 8080.</li>
    </ul>
    <h2>Server-Side</h2>
    <p>The server-side application is built with:</p>
    <ul>
        <li><strong>Node.js</strong>: A JavaScript runtime built on Chrome's V8 JavaScript engine.</li>
        <li><strong>Express</strong>: A web application framework for Node.js.</li>
        <li><strong>Axios</strong>: A promise-based HTTP client for making API requests.</li>
        <li><strong>CORS</strong>: Middleware to enable Cross-Origin Resource Sharing.</li>
    </ul>
    <h3>Server Scripts</h3>
    <ul>
        <li><code>npm start</code>: Starts the server using <code>ts-node-dev</code>.</li>
    </ul>
    <h2>Deployment</h2>
    <p>https://fintektask-client.onrender.com</p>

</body>
</html>
