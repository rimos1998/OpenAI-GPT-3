<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2487.2">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
  </style>
</head>
<body>
<p class="p1"><br></p>
<p class="p1"><br></p>
<p class="p2">// Get the API key input field, user input field, and chat display area</p>
<p class="p2">const apiKeyInput = document.getElementById("api-key");</p>
<p class="p2">const userInput = document.getElementById("user-input");</p>
<p class="p2">const chatDisplay = document.getElementById("chat-display");</p>
<p class="p1"><br></p>
<p class="p2">// Function to handle user input () {</p>
<p class="p2"><span class="Apple-converted-space">  </span>const apiKey = apiKeyInput.value;</p>
<p class="p2"><span class="Apple-converted-space">  </span>const userMessage = userInput.value;</p>
<p class="p1"><br></p>
<p class="p2"><span class="Apple-converted-space">  </span>// Display the user message in the chat display area</p>
<p class="p2"><span class="Apple-converted-space">  </span>const userMessageElement = document.createElement("div");</p>
<p class="p2"><span class="Apple-converted-space">  </span>userMessageElement.innerHTML = `&lt;strong&gt;You:&lt;/strong&gt; ${userMessage}`;</p>
<p class="p2"><span class="Apple-converted-space">  </span>chatDisplay.appendChild(userMessageElement); <span class="Apple-converted-space"> </span></p>
<p class="p1"><br></p>
<p class="p2"><span class="Apple-converted-space"> </span>// Send user input to the backend for processing</p>
<p class="p2"><span class="Apple-converted-space">  </span>fetch("/submit-query", {</p>
<p class="p2"><span class="Apple-converted-space">    </span>method: "POST",</p>
<p class="p2"><span class="Apple-converted-space">    </span>headers: {</p>
<p class="p2"><span class="Apple-converted-space">      </span>"Content-Type": "application/json",</p>
<p class="p2"><span class="Apple-converted-space">    </span>},</p>
<p class="p2"><span class="Apple-converted-space">    </span>body: JSON.stringify({ userInput: userMessage }),</p>
<p class="p2"><span class="Apple-converted-space">  </span>})</p>
<p class="p2"><span class="Apple-converted-space">    </span>.then((response) =&gt; response.json())</p>
<p class="p2"><span class="Apple-converted-space">    </span>.then((data) =&gt; {</p>
<p class="p2">// Retrieve the bot’s response</p>
<p class="p2"><span class="Apple-converted-space">     </span>const botMessage = data.botMessage;</p>
<p class="p1"><br></p>
<p class="p2">// Display the bot’s response in the chat display</p>
<p class="p2"><span class="Apple-converted-space">      </span>const botMessageElement = document.createElement("div");</p>
<p class="p2"><span class="Apple-converted-space">      </span>botMessageElement.innerHTML = `&lt;strong&gt;Bot:&lt;/strong&gt; ${botMessage}`;</p>
<p class="p2"><span class="Apple-converted-space">      </span>chatDisplay.appendChild(botMessageElement);</p>
<p class="p2"><span class="Apple-converted-space">    </span>});</p>
<p class="p1"><br></p>
<p class="p2"><span class="Apple-converted-space">  </span>// Clear the user input field</p>
<p class="p2"><span class="Apple-converted-space">  </span>userInput.value = "";</p>
<p class="p2">}</p>
</body>
</html>
