/* FIREBASE SCHEMA

Tasks
 - Belong to Days (many-to-one, + however we are handling repeat tasks)
 - Belong to Users (one-to-one, again, assuming repeats are treated each as distinct tasks)
 - Attributes include: id, name, priority (time gets added when stuck on a day)

Users (using firebase auth to store this info:
 - Have Tasks (one-to-many)
 - Attributes: id, name

Days:
 - Have Tasks (one-to-many)
 - Belong to User (many-to-one)
 - Attributes include: date, day(of the week)

*/
