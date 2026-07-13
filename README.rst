|title|

 |gfi| |bsp| |gw| |h5|  

This is a simple and open source web game where the goal is to correctly guess who is on the card of the other player.

⚙ How The Game Works:
---------------------

When a player clicks on a category it first brings them to another file called `random_c0.html` depending on the category the player is in. It will redirect the player to a random card with a random identifier.

🎛️ Installation:
---------------------

Make a fork of the repo. This allows you to make a copy of the project. By doing this, you're able to change how the project works and looks. You are able to change the name and the description.

🔧 How To Customize The Game:
---------------------

Great! Now yuo're able to change this project how you want. If you would like to add a new category. First thing to do is to copy the category template folder by using the command below:

.. code-block:: bash

    cp -r ctemplate cX

Then, once it has been copied over, open the file inside. Here you're see: Category title, identifier image, and redo button. The all the redo button does is it gives the player a new identifier. To make sure that the identifier is in the right category. Once you make a new category link it to the redo button in the right category. For example if the category is labeled: `/c9/` then the randomizer should be labeled with the same number. Here is how to do it:

Get out of category you've made and copy `random_cX.html` into the `/randomlogic/` folder. Just replace X with the number or word you want and open the file you just copied. Once open no need to change anything but the file path:

.. code-block:: javascript

            const files = [
                "../categories/cX/p1.html",
                "../categories/cX/p2.html",
                "../categories/cX/p3.html",
                "../categories/cX/p3.html"
            ];

If you see this, Congrets! You're in the right place. All that is needed to change is the folder name. If you named your folder something like `c17` or a word like `birds` This line `"../categories/cX/p1.html"` would become `"../categories/c17/p1.html"` or `"../categories/birds/p1.html"`.

Now if you also changed the file name just keep the ending the same so if it's `p1.html` it can be `john.html`

When adding an image it is important to keep the file path the same. To do so, drag and drop an image you want into the images folder. After link the image name to the file so if it's `johndoe.jpg` in the file path it would be: `src="/guesswho/images/johndoe.jpg"`. Important detail: The image will not load if it is in the wrong format. If you added the image as `johndoe.png` and linked it with `johndoe.jpg` it will not load. Here is a link if you need help with image formats `Image Formats`_


.. _Image Formats: https://www.pygame.org/contribute.html

.. |gw| image:: https://nayere6342.github.io//guesswho/images/subimages/gw_true.png
   :width: 200px
   :height: 40px
   :target: #

.. |bsp| image:: https://nayere6342.github.io//guesswho/images/subimages/bsp_v_true.png
   :width: 250px
   :height: 40px
   :target: #

.. |gfi| image:: https://nayere6342.github.io//guesswho/images/subimages/gfi.png
   :width: 250px
   :height: 35px
   :target: #

.. |h5| image:: https://nayere6342.github.io//guesswho/images/subimages/html_v.png
   :width: 200px
   :height: 40px
   :target: #

.. |title| image:: https://nayere6342.github.io//guesswho/images/subimages/titlegear.png
    :target: https://nayere6342.github.io/guesswho/
    :width: 450px
    :height: 400px

