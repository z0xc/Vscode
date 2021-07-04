C_CPP = g++
FLAGS = -g -Wall -pthread -std=gnu++11
OBJECTS = main.o
SOURSE = join.cpp
#HEAD = head.h
out:$(OBJECTS)
	$(C_CPP) $(FLAGS) -o out  $(OBJECTS)

main.o:$(SOURSE)
	$(C_CPP) $(FLAGS) -o main.o -c $(SOURSE)


.PHONY : clean
clean :
	rm -f out *.o 
