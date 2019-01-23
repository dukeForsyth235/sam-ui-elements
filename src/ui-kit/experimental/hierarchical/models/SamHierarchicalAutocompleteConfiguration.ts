export class SamHierarchicalAutocompleteConfiguration {

    /**
     * sets the default debounce time to 250 milliseconds 
     */
    constructor() {
      this.debounceTime = 250;
    }
  
    /**
     * Used to describe the drop down (Text should match the label that will be supplied)
     */
    public labelText: string;
  
    /**
     * Used for the Id of the control
     */
    public id: string;
  
    /**
     *  This is the primary field used to identify each object in the results
     */
    public primaryKeyField: string;
  
    /**
     *  Property from supplied model used for the top part of the basic template
     */
    public valueProperty: string;
  
    /**
     *  Property from supplied model used for the bottom part of the basic template
     */
    public subValueProperty: string;
  
    /**
     *  Sets the time waited for addional key actions Default is 250 milliseconds
     */
    public debounceTime: number;
  
    /**
     * Place holder text for input
     */
    public placeHolderText: string;
  
  }
  