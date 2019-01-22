import { SamHierarchicalTreeGridConfiguration } from './SamHierarchicalTreeGridConfiguration';
import { SamHierarchicalTreeHeaderConfiguration } from './SamHierarchicalTreeHeaderConfiguration';
import { SamHierarchicalTreeGridColumn } from './SamHierarchicalTreeGridColumn';

export class SamHierarchicalTreeConfiguration implements SamHierarchicalTreeGridConfiguration, SamHierarchicalTreeHeaderConfiguration {

    /**
     * 
     */
    public filterPlaceholderText: String;

    /**
     * 
     */
    public gridDisplayedColumn: SamHierarchicalTreeGridColumn[]

    /**
     * 
     */
    public primaryKey: string;

    /**
    * 
    */
    public childCountField: string;

}
