const Faq = () => {
    return <div className="w-[80%] mx-auto my-10">
    <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
    <div className="space-y-4">
      {/* FAQ Item 1 */}
      <div className="collapse collapse-arrow bg-base-200 rounded-lg">
        <input type="radio" name="faq-accordion" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Do you offer discounts on bulk purchases?
        </div>
        <div className="collapse-content">
          <p>
            Yes, we offer special discounts for bulk purchases. Please contact us for more details about bulk order pricing and availability.
          </p>
        </div>
      </div>
  
      {/* FAQ Item 2 */}
      <div className="collapse collapse-arrow bg-base-200 rounded-lg">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title text-xl font-medium">
          Can I pre-order upcoming book releases?
        </div>
        <div className="collapse-content">
          <p>
            Absolutely! You can pre-order upcoming book releases through our website. Keep an eye on our Upcoming section for updates.
          </p>
        </div>
      </div>
  
      {/* FAQ Item 3 */}
      <div className="collapse collapse-arrow bg-base-200 rounded-lg">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title text-xl font-medium">
          Do you sell used or second-hand books?
        </div>
        <div className="collapse-content">
          <p>
            Yes, we have a collection of used and second-hand books in excellent condition. Browse our Used Books section for more details.
          </p>
        </div>
      </div>
  
      {/* FAQ Item 4 */}
      <div className="collapse collapse-arrow bg-base-200 rounded-lg">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title text-xl font-medium">
          What is your return policy for books?
        </div>
        <div className="collapse-content">
          <p>
            We accept returns for books in their original condition within 7 days of purchase. Please ensure the book is undamaged and accompanied by a receipt.
          </p>
        </div>
      </div>
  
      {/* FAQ Item 5 */}
      <div className="collapse collapse-arrow bg-base-200 rounded-lg">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title text-xl font-medium">
          Do you ship internationally?
        </div>
        <div className="collapse-content">
          <p>
            Currently, we only ship within Bangladesh. We are working on expanding our delivery services to international locations.
          </p>
        </div>
      </div>
    </div>
  </div>
  

}
export default Faq;