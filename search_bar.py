import pandas as pd

df = pd.read_csv("House_Rent_Dataset.csv")

def recommendation(inpts):
    # Assuming df is your DataFrame
    filters = ["Bathroom", "BHK", "City", "Furnishing Status", "Floor"]
    values = [0] * len(filters)
    table = df
    for i in range(len(values)):
        values[i] = inpts[i]

    for i in range(len(values)):
        if values[i] != '' and i<2:
                # Convert the input value to the appropriate data type (assuming int for now)
            table = table.loc[table[filters[i]] == int(values[i])]
        elif values[i] != "":
            table = table.loc[table[filters[i]] == values[i]]

    # Find the row with the minimum rent
    table=table.loc[table['Rent'] == table['Rent'].min()]
    if table.empty:
        print("No Properties Available")

    else:
        print(table)

filter = ["2","2","Mumbai","Semi-Furnished","8"]
recommendation(filter)