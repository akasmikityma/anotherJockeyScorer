# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## home , game room , results room >>
 
  home has bunch players to choose from and the functionality to create someone else> 
  so >>> a inpput a button >>>
     >>> a comp that has hard coded cards[selectable] >> 
     >>> also there is a button to get into the game room >>
     >>> the catch is the players has to be the players that the user has selected ....

     -----------------------------------------------------------------
     All the things ON UI  >>>=>>
     
     --make the image in the card someehat more concise .. get the colors sorted >> look more for the ui based libraries>>
     -- 

     Problems>> on Card =>
                          the src of the image should be given dynamically 
                          >> i can make an array of src's and then map the cards ..[done]

                          >>make the cards selectable and then starts incorporating atoms idea in this >> [done]

                          >>now when the cards are selected .. can i get the whole infi that the card suppose to have and if the card is selected then make some ui change => {get its bg to something bright}

task 1> get done with the functionality that lets the user make a player of its own >> [done]
task 2> bug_fixes=> --if there is no input in te input field ..that means no players should be added >>[done]
                    --if player doesnt select at least 2 players cant go to te game room .. that actually makes a lot of sense >>[done]
                    --get delete button omitted from the legend players>>