Feature: starting a new quest
  Scenario: choosing a directive
    Given we are a registered user
    when we choose to embark on a new quest
    then gapz will ask us for a directive


