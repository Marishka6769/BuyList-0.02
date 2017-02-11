/**
 * Created by maryna on 08.02.17.
 * змінні через jQuery =$name
 */

$(function () {
    var $List_item = $('.bl-row');
    var Template_element = $('.harvesting1').html(); //дістає htlm код зсередини
    var Template_element_1 = $('.harvesting').html();
    var $List_item_1 = $('.Whynot.no_buy');


    console.log("Template", Template_element);

    function addItem(title) {             //в ноді знаходить щось из класом item і замінює на назву title
        var $node = $(Template_element); //Create new HTML node

        var quantity = 1;

        var $quantity_label = $node.find(".bl-label");//знаходжу куди писати назву

        var $node_1 = $(Template_element_1);

        var buy=$node.find(".bl-buttons.no_buy");

        var no_buy=$node.find(".bl-buttons.buy");
        buy.click(function () {
            $node.find(".bl-button").hide();  //приховати елемент
            $node.find(".bl-button.buy").show();

            $node_1.remove();
            $(".Whynot.buy").append($node_1);
            $node.find(".name.production").addClass("line");
            $node_1.addClass("line");
        });

        no_buy.click(function () {
            $node.find(".bl-button").show();
            $node.find(".bl-button.buy").hide();
            $node_1.remove();
            $(".Whynot.no_buy").append($node_1);
            $node.find(".name.production").removeClass("line");
            $node_1.removeClass("line");
        });

        $node_1.find(".bl-lists").text(title);

        $node.find(".name.production").text(title); //записую назву замість стандартної
        $node.find(".name.redaction").val(title);
        $node.find(".name.production").click(function () {
            $node.find(".name.production").hide();
            $node.find(".name.redaction").show();
        });
        $node.find(".name.redaction").keyup(function () {
            var new_title=$node.find(".name.redaction").val();
            $node_1.find(".bl-lists").text(new_title);
            $node.find(".name.production").text(new_title);
            $node.find(".name.redaction").val(new_title);
            $node.find(".name.redaction").focus();
        });
        $node.find(".name.redaction").mouseleave(function () {
            $node.find(".name.production").show();
            $node.find(".name.redaction").hide();
        });
        //Delete action
        $node.find(".bl-buttons1").click(function () {
            $node.remove();
            $node_1.remove();
        });

        $List_item.append($node); //Add to the end of the list
        $List_item_1.append($node_1);

        $node.find(".bl-plus").click(function () {
            quantity++;
            $quantity_label.text(quantity);
            $node_1.find(".bl-lists1").text(quantity);
        });
        $node.find(".bl-minus").click(function () {
            if (quantity > 1) {
                quantity--;
                $quantity_label.text(quantity);
                $node_1.find(".bl-lists1").text(quantity);

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

