Feature: LoginFeature

 This is the automation with cucumber

 Scenario: Conduidt login
  Given I open conduit login page
  When I type in
   |username |password|
   |qamilestone@gmail.com|admin123|
  And I click on sign in button
  Then Four feed should be open
