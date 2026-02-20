 function useConcat() {
            // Create two string variables
            let firstName = "Dapo";
            let lastName = "Makinde";

            // Use concat() to join the two strings
            let fullName = firstName.concat(" ", lastName);

            // Display the result in the HTML
            document.getElementById("concatOutput").innerText = 
                "Full Name: " + fullName;
        }

        /* =========================================================
           slice() METHOD
           Used to extract part of a string
        ========================================================= */

        function useSlice() {
            // Create a string variable
            let sentence = "Word is powerful than sword";

            // slice(start, end) extracts part of the string
            // This will extract "Word is Powerful than sword"
            let result = sentence.slice(0, 28);

            // Display the result
            document.getElementById("sliceOutput").innerText = 
                "Sliced text: " + result;
        }

        /* =========================================================
           toString() METHOD
           Converts a number to a string
        ========================================================= */

        function useToString() {
            // Create a number variable
            let age = 37;

            // Convert number to string using toString()
            let ageAsString = age.toString();

            // Display result and type
            document.getElementById("toStringOutput").innerText = 
                "Age as string: " + ageAsString + 
                " | Type: " + typeof ageAsString;
        }

        /* =========================================================
           toPrecision() METHOD
           Formats a number to a specified length
        ========================================================= */

        function useToPrecision() {
            // Create a number variable
            let number = 123.456789;

            // Format number to 4 significant digits
            let preciseNumber = number.toPrecision(4);

            // Display the formatted number
            document.getElementById("precisionOutput").innerText = 
                "Formatted number: " + preciseNumber;
        }