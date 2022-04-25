/**
 * User Interface Class
 */
export class UI {
  /**
   * Add a New Product 
   * @param {Object} product A new product Object
   */
  addProduct(product) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body" style="width: 100%;margin-left: 0px;">
                    <center>
                    <div style="margin-left: 0px;"><strong>Producto</strong>: ${product.name}</div>
                    <div style="margin-left: 0px;"><strong>Precio</strong>: ${product.price}</div>
                    <div style="margin-left: 0px;"><strong>Año</strong>: ${product.year}</div>
                    <div style="margin-left: 0px;"><strong>Categoria</strong>: ${document.getElementById("categoria").value}</div>
                    <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
                    </center>
                </div>
            </div>
        `;
    productList.appendChild(element);
  }

  /**
   * Reset Form Values
   */
  resetForm() {
    document.getElementById("product-form").reset();
  }

  deleteProduct(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.remove();
      this.showMessage("Product Deleted Succsssfully", "success");
    }
  }

  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));

    // Show in The DOM
    const container = document.querySelector(".container");
    const app = document.querySelector("#App");

    // Insert Message in the UI
    container.insertBefore(div, app);

    // Remove the Message after 3 seconds
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}
