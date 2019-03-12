# an array of state dictionaries
import random

states = [
    {
        "name": "Alabama",
        "capital": "Montgomery"
    }, {
        "name": "Alaska",
        "capital": "Juneau"
    }
    # , {
    #     "name": "Arizona",
    #     "capital": "Phoenix"
    # }, {
    #     "name": "Arkansas",
    #     "capital": "Little Rock"
    # }, {
    #     "name": "California",
    #     "capital": "Sacramento"
    # }, {
    #     "name": "Colorado",
    #     "capital": "Denver"
    # }, {
    #     "name": "Connecticut",
    #     "capital": "Hartford"
    # }, {
    #     "name": "Delaware",
    #     "capital": "Dover"
    # }, {
    #     "name": "Florida",
    #     "capital": "Tallahassee"
    # }, {
    #     "name": "Georgia",
    #     "capital": "Atlanta"
    # }, {
    #     "name": "Hawaii",
    #     "capital": "Honolulu"
    # }, {
    #     "name": "Idaho",
    #     "capital": "Boise"
    # }, {
    #     "name": "Illinois",
    #     "capital": "Springfield"
    # }, {
    #     "name": "Indiana",
    #     "capital": "Indianapolis"
    # }, {
    #     "name": "Iowa",
    #     "capital": "Des Moines"
    # }, {
    #     "name": "Kansas",
    #     "capital": "Topeka"
    # }, {
    #     "name": "Kentucky",
    #     "capital": "Frankfort"
    # }, {
    #     "name": "Louisiana",
    #     "capital": "Baton Rouge"
    # }, {
    #     "name": "Maine",
    #     "capital": "Augusta"
    # }, {
    #     "name": "Maryland",
    #     "capital": "Annapolis"
    # }, {
    #     "name": "Massachusetts",
    #     "capital": "Boston"
    # }, {
    #     "name": "Michigan",
    #     "capital": "Lansing"
    # }, {
    #     "name": "Minnesota",
    #     "capital": "St. Paul"
    # }, {
    #     "name": "Mississippi",
    #     "capital": "Jackson"
    # }, {
    #     "name": "Missouri",
    #     "capital": "Jefferson City"
    # }, {
    #     "name": "Montana",
    #     "capital": "Helena"
    # }, {
    #     "name": "Nebraska",
    #     "capital": "Lincoln"
    # }, {
    #     "name": "Nevada",
    #     "capital": "Carson City"
    # }, {
    #     "name": "New Hampshire",
    #     "capital": "Concord"
    # }, {
    #     "name": "New Jersey",
    #     "capital": "Trenton"
    # }, {
    #     "name": "New Mexico",
    #     "capital": "Santa Fe"
    # }, {
    #     "name": "New York",
    #     "capital": "Albany"
    # }, {
    #     "name": "North Carolina",
    #     "capital": "Raleigh"
    # }, {
    #     "name": "North Dakota",
    #     "capital": "Bismarck"
    # }, {
    #     "name": "Ohio",
    #     "capital": "Columbus"
    # }, {
    #     "name": "Oklahoma",
    #     "capital": "Oklahoma City"
    # }, {
    #     "name": "Oregon",
    #     "capital": "Salem"
    # }, {
    #     "name": "Pennsylvania",
    #     "capital": "Harrisburg"
    # }, {
    #     "name": "Rhode Island",
    #     "capital": "Providence"
    # }, {
    #     "name": "South Carolina",
    #     "capital": "Columbia"
    # }, {
    #     "name": "South Dakota",
    #     "capital": "Pierre"
    # }, {
    #     "name": "Tennessee",
    #     "capital": "Nashville"
    # }, {
    #     "name": "Texas",
    #     "capital": "Austin"
    # }, {
    #     "name": "Utah",
    #     "capital": "Salt Lake City"
    # }, {
    #     "name": "Vermont",
    #     "capital": "Montpelier"
    # }, {
    #     "name": "Virginia",
    #     "capital": "Richmond"
    # }, {
    #     "name": "Washington",
    #     "capital": "Olympia"
    # }, {
    #     "name": "West Virginia",
    #     "capital": "Charleston"
    # }, {
    #     "name": "Wisconsin",
    #     "capital": "Madison"
    # }, {
    #     "name": "Wyoming",
    #     "capital": "Cheyenne"
    # }
]

for state in states:
    state['times_correct'] = 0
    state['times_incorrect'] = 0


def state_capitals():
    correct = 0
    incorrect = 0
    random.shuffle(states)

    for state in states:
        answer = input('What is the capital of ' + state["name"] + ": ")
        if answer.lower() == state["capital"].lower():
            print('Correct!  The capital of ' +
                  state["name"] + " is " + state["capital"])
            correct += 1
            state['times_correct'] += 1
        else:
            print('Wrong.. the answer is ' + state["capital"])
            incorrect += 1
            state['times_incorrect'] += 1
        print("You've guess this one right " +
              str(state["times_correct"]) + " times correctly and " + str(state["times_incorrect"]) + " times incorrectly.")
        print('You have ' + str(correct) + ' correct responses and ' +
              str(incorrect) + ' incorrect responses for this session in general.')

    print('This round is over.  You had ' + str(correct) +
          ' correct responses and ' + str(incorrect) + ' incorrect responses')

    play_again = input("Would you like to play again? Enter 'yes' or 'no'.  ")

    # why doesn't before work??
    # I'm trying to while look until the user puts in an appropriate response
    # while play_again != 'yes' or play_again != 'no':
    #     print(play_again)
    #     play_again = input(
    #         "Not sure what you're trying to say... please put in 'yes' or 'no'.")

    if play_again == 'yes':
        state_capitals()
    elif play_again == 'no':
        print("Goodbye")
    else:
        print("I don't know what you're trying to say... Goodbye.")


state_capitals()
