import os

with open("skin-database/images/ak/result.html", 'w') as output_file:
    for filename in os.listdir("skin-database/images/ak"):
        print(filename)
        if filename.endswith(".png"):
            output_file.write(r'<img src="./images/ak/' + filename + r'" alt="' + filename + r'" width="16%" height="16%" style="background-color: lightgray;">' + '\n')

    