# megascan_library_automation_test

I have done the automation task using Cypress with javascript.
There are two automation scripts with name "task6.cy.js" and "task7.cy.js" under e2e folder.

Issue in both automation tasks is that, since cypress controls browser as a third party controller, 
hence login with Epic Games account couldnt work on my script which lead to unsuccessfull downloading asset steps. 
Reason for this is the captcha image, when you try to sign in to Epic Games account. Since it can not be automated via cypress
so, i couldnt sign-in to epic games with my automation script.
But all other steps are completed.

There is a way to properly structure this automation script with help of Page Object Model, but since i was so occupied by my current tasks,
i wasn't able to create Page Object Model for my automation script.


Hope you would like it.
You can download the repo and run it to see the results.

In order to run cypress, use command: npx cypress open --brwoser chrome --e2e
