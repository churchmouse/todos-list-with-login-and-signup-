# Login and Sign up sytem in React
  I chose to work on a Login and Registration system in react because there was a complete video tutorial on making a todos app in youtube so it would be more like a copy and paste session, but i wanted to see if i really understood the concepts from the tutorial .Making a login and and registration system would be give me a real hands on experience and maybe later on intergrate my todos app with the login and sign up system....
  Right now the login component just checks (from the store) if you are a member and renders a 'you are logged in message' if you are a member or 'Wrong Email or Password ' if you are not in the store("membersStorage.js").
  The sign up page: 
      -renders errors (absent name, absent password, absent password confirmations and password and password confirmations non-similarities)
      -on form submit, checks whether the email address is already in use by referencing a store("membersStorage.js") and renders an error if email is owned by someone else 
