CXX:=g++
CXXFLAGS := -Wall -g -lpthread
# 省略许多
$(BUILD_DIR)/%: $(SRC_DIR)/%.cpp
	@echo + G++ $@
	@mkdir -p $(BUILD_DIR)
	@echo "$(CXX) $(CXXFLAGS) -o $@ $<"
	@$(CXX) $(CXXFLAGS) -o $@ $<