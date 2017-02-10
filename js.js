/**
 * Created by maryna on 08.02.17.
 * змінні через jQuery =$name
 */

$(function () {
    var $List_item = $('.bl-row');
    var Template_element = $('.harvesting1').html(); //дістає htlm код зсередини


    console.log("Template", Template_element);

    function addItem(title) {             //в ноді знаходить щось из класом item і замінює на назву title
        var $node = $(Template_element); //Create new HTML node

        var quantity = 1;

        var $quantity_label = $node.find(".bl-label");//знаходжу куди писати назву

        $node.find(".name").text(title); //записую назву замість стандартної

        //Delete action
        $node.find(".bl-buttons1").click(function () {
            $node.remove();
        });

        $List_item.append($node); //Add to the end of the list


        $node.find(".bl-plus").click(function () {
            quantity++;
            $quantity_label.text(quantity);
        });
        $node.find(".bl-minus").click(function () {
            if (quantity > 1) {
                quantity--;
                $quantity_label.text(quantity);
            }

        });

    }
        var $addButton = $(".button-add-prod");
        var $input = $(".name-prod");

        function addNewItem() {
            var item_name = $input.val();
            if (item_name.trim()) {
                addItem(item_name);
            }
            $input.val("");
            $input.focus();

        }

        $input.attr("placeholder", "Input name of product");
        $addButton.click(addNewItem);
        addItem("Помідори");//title
        addItem("Сир");
        addItem("Печиво");

});

