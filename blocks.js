// Not good, needs braces
if (getCondition())
    callFunction();

// All is well
if (longerCondition) {
    callFunction();
}

if (shortCondition()) return; // Acceptable, fits well within 80 characters

for (let i = 0; i < foo.length; i++) bar(foo[i]); // Unacceptable, needs braces