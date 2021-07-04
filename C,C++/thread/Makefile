C_CPP = g++
FLAGS = -g -Wall  -pthread  -std=c++11
OBJECTS = main.o
SOURSE = thread_test.cpp
#HEAD = head.h
out:$(OBJECTS)
	$(C_CPP) $(FLAGS) -o out  $(OBJECTS)

main.o:$(SOURSE)
	$(C_CPP) -o main.o -c $(SOURSE)


.PHONY : clean
clean :
	rm -f out *.o 
