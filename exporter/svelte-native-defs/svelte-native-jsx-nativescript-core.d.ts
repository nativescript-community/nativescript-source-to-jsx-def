export {} //Ensure this is a module
type AccessibilityLiveRegion = import("@nativescript/core").AccessibilityLiveRegion;
type AccessibilityRole = import("@nativescript/core").AccessibilityRole;
type AccessibilityState = import("@nativescript/core").AccessibilityState;
type ActionBar = import("@nativescript/core").ActionBar;
type ActionItems = import("@nativescript/core").ActionItems;
type AndroidActionBarSettings = import("@nativescript/core/ui/action-bar/index").AndroidActionBarSettings;
type AndroidActionItemSettings = import("@nativescript/core/ui/action-bar/index").AndroidActionItemSettings;
type AndroidFrame = import("@nativescript/core/ui/frame/index").AndroidFrame;
type BackstackEntry = import("@nativescript/core").BackstackEntry;
type CSSShadow = import("@nativescript/core").CSSShadow;
type Color = import("@nativescript/core").Color;
type CoreTypes = import("@nativescript/core").CoreTypes;
type CreateViewEventData = import("@nativescript/core").CreateViewEventData;
type DOMNode = import("@nativescript/core/debugger/dom-node").DOMNode;
type EventData = import("@nativescript/core").EventData;
type FormattedString = import("@nativescript/core").FormattedString;
type Frame = import("@nativescript/core").Frame;
type FrameBackstackEntry = import("@nativescript/core").BackstackEntry;
type FrameNavigationEntry = import("@nativescript/core").NavigationEntry;
type FrameNavigationTransition = import("@nativescript/core").NavigationTransition;
type GestureEventData = import("@nativescript/core").GestureEventData;
type IOSActionItemSettings = import("@nativescript/core/ui/action-bar/index").IOSActionItemSettings;
type ImageSource = import("@nativescript/core").ImageSource;
type ItemEventData = import("@nativescript/core").ItemEventData;
type ItemsSource = import("@nativescript/core").ItemsSource;
type KeyedTemplate = import("@nativescript/core").KeyedTemplate;
type LayoutBase = import("@nativescript/core").LayoutBase;
type LinearGradient = import("@nativescript/core/ui/styling/gradient").LinearGradient;
type ListViewItemsSource = import("@nativescript/core").ItemsSource;
type LoadEventData = import("@nativescript/core").LoadEventData;
type NavigatedData = import("@nativescript/core").NavigatedData;
type NavigationButton = import("@nativescript/core").NavigationButton;
type NavigationData = import("@nativescript/core").NavigationData;
type NavigationEntry = import("@nativescript/core").NavigationEntry;
type NavigationTransition = import("@nativescript/core").NavigationTransition;
type ObservableArray<T1> = import("@nativescript/core").ObservableArray<T1>;
type Page = import("@nativescript/core").Page;
type PanGestureEventData = import("@nativescript/core").PanGestureEventData;
type PinchGestureEventData = import("@nativescript/core").PinchGestureEventData;
type PropertyChangeData = import("@nativescript/core").PropertyChangeData;
type RepeaterItemsSource = import("@nativescript/core").ItemsSource;
type RotationGestureEventData = import("@nativescript/core").RotationGestureEventData;
type ScrollEventData = import("@nativescript/core").ScrollEventData;
type SegmentedBarItem = import("@nativescript/core").SegmentedBarItem;
type SelectedIndexChangedEventData = import("@nativescript/core").SelectedIndexChangedEventData;
type ShownModallyData = import("@nativescript/core").ShownModallyData;
type Span = import("@nativescript/core").Span;
type Style = import("@nativescript/core").Style;
type SwipeGestureEventData = import("@nativescript/core").SwipeGestureEventData;
type TabViewItem = import("@nativescript/core").TabViewItem;
type TabViewSelectedIndexChangedEventData = import("@nativescript/core").SelectedIndexChangedEventData;
type TapGestureEventData = import("@nativescript/core").TapGestureEventData;
type Template = import("@nativescript/core").Template;
type TouchGestureEventData = import("@nativescript/core").TouchGestureEventData;
type View = import("@nativescript/core").View;
type ViewBase = import("@nativescript/core").ViewBase;
type WebViewInterfacesLoadEventData = import("@nativescript/core").LoadEventData;
type iOSFrame = import("@nativescript/core/ui/frame/index").iOSFrame;
type Override<What, With> = Omit<What, keyof With> & With


declare global {
namespace svelteNative.JSX {

// ui/layouts/absolute-layout/index.d.ts
type AbsoluteLayoutAttributes = Override<LayoutBaseAttributes, {

}>;

// ui/action-bar/index.d.ts
type ActionBarAttributes = Override<ViewAttributes, {
    actionItems?: ActionItems;
    android?: AndroidActionBarSettings;
    androidContentInset?: string | number | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    androidContentInsetLeft?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    androidContentInsetRight?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    effectiveContentInsetLeft?: number;
    effectiveContentInsetRight?: number;
    flat?: string | boolean;
    ios?: any;
    iosIconRenderingMode?: "automatic" | "alwaysOriginal" | "alwaysTemplate";
    navigationButton?: NavigationButton;
    onflatChange?: (args: PropertyChangeData) => void;
    oniosIconRenderingModeChange?: (args: PropertyChangeData) => void;
    ontitleChange?: (args: PropertyChangeData) => void;
    title?: string;
    titleView?: View;
}>;

// ui/action-bar/index.d.ts
type ActionItemAttributes = Override<ViewBaseAttributes, {
    actionBar?: ActionBar;
    actionView?: View;
    android?: AndroidActionItemSettings;
    icon?: string;
    ios?: IOSActionItemSettings;
    oniconChange?: (args: PropertyChangeData) => void;
    ontap?: (args: EventData) => void;
    ontextChange?: (args: PropertyChangeData) => void;
    onvisibilityChange?: (args: PropertyChangeData) => void;
    text?: string;
    visibility?: string;
}>;

// ui/activity-indicator/index.d.ts
type ActivityIndicatorAttributes = Override<ViewAttributes, {
    android?: any;
    busy?: string | boolean;
    ios?: any;
    onbusyChange?: (args: PropertyChangeData) => void;
}>;

// ui/button/index.d.ts
type ButtonAttributes = Override<TextBaseAttributes, {
    accessibilityRole?: AccessibilityRole;
    accessible?: boolean;
    android?: any;
    ios?: any;
    ontap?: (args: EventData) => void;
    textWrap?: boolean;
}>;

// ui/core/view/index.d.ts
type ContainerViewAttributes = Override<ViewAttributes, {
    iosOverflowSafeArea?: boolean;
}>;

// ui/content-view/index.ts
type ContentViewAttributes = Override<CustomLayoutViewAttributes, {
    content?: View;
    layoutView?: View;
}>;

// ui/core/view/index.d.ts
type CustomLayoutViewAttributes = Override<ContainerViewAttributes, {

}>;

// ui/date-picker/index.d.ts
type DatePickerAttributes = Override<ViewAttributes, {
    android?: any;
    date?: string | Date;
    day?: string | number;
    ios?: any;
    iosPreferredDatePickerStyle?: string | number;
    maxDate?: string | Date;
    minDate?: string | Date;
    month?: string | number;
    ondateChange?: (args: PropertyChangeData) => void;
    ondayChange?: (args: PropertyChangeData) => void;
    oniosPreferredDatePickerStyleChange?: (args: PropertyChangeData) => void;
    onmaxDateChange?: (args: PropertyChangeData) => void;
    onminDateChange?: (args: PropertyChangeData) => void;
    onmonthChange?: (args: PropertyChangeData) => void;
    onyearChange?: (args: PropertyChangeData) => void;
    year?: string | number;
}>;

// ui/layouts/dock-layout/index.d.ts
type DockLayoutAttributes = Override<LayoutBaseAttributes, {
    onstretchLastChildChange?: (args: PropertyChangeData) => void;
    stretchLastChild?: string | boolean;
}>;

// ui/editable-text-base/index.d.ts
type EditableTextBaseAttributes = Override<TextBaseAttributes, {
    autocapitalizationType?: "none" | "words" | "sentences" | "allcharacters";
    autocorrect?: string | boolean;
    editable?: string | boolean;
    hint?: string;
    keyboardType?: "number" | "datetime" | "phone" | "url" | "email" | "integer";
    maxLength?: string | number;
    maxLines?: string | number;
    onautocapitalizationTypeChange?: (args: PropertyChangeData) => void;
    onautocorrectChange?: (args: PropertyChangeData) => void;
    oneditableChange?: (args: PropertyChangeData) => void;
    onhintChange?: (args: PropertyChangeData) => void;
    onkeyboardTypeChange?: (args: PropertyChangeData) => void;
    onmaxLengthChange?: (args: PropertyChangeData) => void;
    onmaxLinesChange?: (args: PropertyChangeData) => void;
    onreturnKeyTypeChange?: (args: PropertyChangeData) => void;
    onupdateTextTriggerChange?: (args: PropertyChangeData) => void;
    returnKeyType?: "done" | "next" | "go" | "search" | "send";
    updateTextTrigger?: "focusLost" | "textChanged";
}>;

// ui/layouts/flexbox-layout/index.d.ts
type FlexboxLayoutAttributes = Override<LayoutBaseAttributes, {
    alignContent?: "stretch" | "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
    alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
    flexDirection?: "column" | "row" | "row-reverse" | "column-reverse";
    flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
}>;

// ui/text-base/formatted-string.ts
type FormattedStringAttributes = Override<ViewBaseAttributes, {
    backgroundColor?: string | Color;
    color?: string | Color;
    fontFamily?: string;
    fontSize?: string | number;
    fontStyle?: "normal" | "italic";
    fontWeight?: "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "bold" | "700" | "800" | "900";
    spans?: ObservableArray<Span>;
    textDecoration?: "none" | "underline" | "line-through" | "underline line-through";
}>;

// ui/frame/index.d.ts
type FrameAttributes = Override<FrameBaseAttributes, {
    actionBarVisibility?: "always" | "never" | "auto";
    android?: AndroidFrame;
    animated?: boolean;
    backStack?: FrameBackstackEntry[];
    currentEntry?: FrameNavigationEntry;
    currentPage?: Page;
    ios?: iOSFrame;
    navigationBarHeight?: number;
    onnavigatedTo?: (args: NavigationData) => void;
    onnavigatingTo?: (args: NavigationData) => void;
    transition?: FrameNavigationTransition;
}>;

// ui/frame/frame-common.ts
type FrameBaseAttributes = Override<CustomLayoutViewAttributes, {
    actionBarVisibility?: "always" | "never" | "auto";
    animated?: boolean;
    backStack?: BackstackEntry[];
    currentEntry?: NavigationEntry;
    currentPage?: Page;
    defaultPage?: string;
    navigationBarHeight?: number;
    onactionBarVisibilityChange?: (args: PropertyChangeData) => void;
    ondefaultPageChange?: (args: PropertyChangeData) => void;
    transition?: NavigationTransition;
}>;

// ui/layouts/grid-layout/index.d.ts
type GridLayoutAttributes = Override<LayoutBaseAttributes, {
    columns?: string;
    rows?: string;
}>;

// ui/html-view/index.d.ts
type HtmlViewAttributes = Override<ViewAttributes, {
    android?: any;
    html?: string;
    ios?: any;
    onhtmlChange?: (args: PropertyChangeData) => void;
}>;

// ui/image/index.d.ts
type ImageAttributes = Override<ViewAttributes, {
    android?: any;
    decodeHeight?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    decodeWidth?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    imageSource?: string | ImageSource;
    ios?: any;
    isLoading?: string | boolean;
    loadMode?: "sync" | "async";
    ondecodeHeightChange?: (args: PropertyChangeData) => void;
    ondecodeWidthChange?: (args: PropertyChangeData) => void;
    onimageSourceChange?: (args: PropertyChangeData) => void;
    onisLoadingChange?: (args: PropertyChangeData) => void;
    onloadModeChange?: (args: PropertyChangeData) => void;
    onsrcChange?: (args: PropertyChangeData) => void;
    onstretchChange?: (args: PropertyChangeData) => void;
    src?: string | any;
    stretch?: "none" | "aspectFill" | "aspectFit" | "fill";
    tintColor?: string | Color;
}>;

// ui/label/index.d.ts
type LabelAttributes = Override<TextBaseAttributes, {
    android?: any;
    ios?: any;
    textWrap?: string | boolean;
}>;

// ui/layouts/layout-base.d.ts
type LayoutBaseAttributes = Override<CustomLayoutViewAttributes, {
    clipToBounds?: string | boolean;
    isPassThroughParentEnabled?: string | boolean;
    onclipToBoundsChange?: (args: PropertyChangeData) => void;
    onisPassThroughParentEnabledChange?: (args: PropertyChangeData) => void;
    padding?: string | number | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    paddingBottom?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    paddingLeft?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    paddingRight?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    paddingTop?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
}>;

// ui/list-picker/index.d.ts
type ListPickerAttributes = Override<ViewAttributes, {
    android?: any;
    ios?: any;
    isItemsSource?: boolean;
    items?: string | any[] | ItemsSource;
    onitemsChange?: (args: PropertyChangeData) => void;
    onselectedIndexChange?: (args: PropertyChangeData) => void;
    onselectedValueChange?: (args: PropertyChangeData) => void;
    ontextFieldChange?: (args: PropertyChangeData) => void;
    onvalueFieldChange?: (args: PropertyChangeData) => void;
    selectedIndex?: string | number;
    selectedValue?: string;
    textField?: string;
    valueField?: string;
}>;

// ui/list-view/index.d.ts
type ListViewAttributes = Override<ViewAttributes, {
    android?: any;
    ios?: any;
    iosEstimatedRowHeight?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    itemIdGenerator?: (item: any, index: number, items: any) => number;
    itemTemplate?: string | Template;
    itemTemplateSelector?: string | ((item: any, index: number, items: any) => string);
    itemTemplates?: string | KeyedTemplate[];
    items?: string | any[] | ListViewItemsSource;
    oniosEstimatedRowHeightChange?: (args: PropertyChangeData) => void;
    onitemLoading?: (args: ItemEventData) => void;
    onitemTap?: (args: ItemEventData) => void;
    onitemTemplateChange?: (args: PropertyChangeData) => void;
    onitemTemplatesChange?: (args: PropertyChangeData) => void;
    onitemsChange?: (args: PropertyChangeData) => void;
    onloadMoreItems?: (args: EventData) => void;
    onrowHeightChange?: (args: PropertyChangeData) => void;
    rowHeight?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    separatorColor?: string | Color;
}>;

// ui/action-bar/index.d.ts
type NavigationButtonAttributes = Override<ActionItemAttributes, {

}>;

// data/observable/index.ts
type ObservableAttributes = {

};

// ui/page/index.d.ts
type PageAttributes = Override<PageBaseAttributes, {
    accessibilityAnnouncePageEnabled?: boolean;
    actionBar?: ActionBar;
    actionBarHidden?: boolean;
    androidStatusBarBackground?: Color;
    backgroundSpanUnderStatusBar?: boolean;
    enableSwipeBackNavigation?: boolean;
    frame?: Frame;
    hasActionBar?: boolean;
    navigationContext?: any;
    onAccessibilityPerformEscape?: () => boolean;
    onnavigatedFrom?: (args: NavigatedData) => void;
    onnavigatedTo?: (args: NavigatedData) => void;
    onnavigatingFrom?: (args: NavigatedData) => void;
    onnavigatingTo?: (args: NavigatedData) => void;
    statusBarStyle?: "light" | "dark";
}>;

// ui/page/page-common.ts
type PageBaseAttributes = Override<ContentViewAttributes, {
    accessibilityAnnouncePageEnabled?: boolean;
    actionBar?: ActionBar;
    actionBarHidden?: string | boolean;
    androidStatusBarBackground?: string | Color;
    backgroundSpanUnderStatusBar?: string | boolean;
    enableSwipeBackNavigation?: string | boolean;
    frame?: Frame;
    hasActionBar?: boolean;
    navigationContext?: any;
    onactionBarHiddenChange?: (args: PropertyChangeData) => void;
    onbackgroundSpanUnderStatusBarChange?: (args: PropertyChangeData) => void;
    onenableSwipeBackNavigationChange?: (args: PropertyChangeData) => void;
    onnavigatedFrom?: (args: NavigatedData) => void;
    onnavigatedTo?: (args: NavigatedData) => void;
    onnavigatingFrom?: (args: NavigatedData) => void;
    onnavigatingTo?: (args: NavigatedData) => void;
    onshowingModally?: (args: ShownModallyData) => void;
    onshownModally?: (args: ShownModallyData) => void;
    page?: Page;
    statusBarStyle?: "light" | "dark";
}>;

// ui/placeholder/index.ts
type PlaceholderAttributes = Override<ViewAttributes, {
    oncreatingView?: (args: CreateViewEventData) => void;
}>;

// ui/progress/index.d.ts
type ProgressAttributes = Override<ViewAttributes, {
    android?: any;
    ios?: any;
    maxValue?: string | number;
    onmaxValueChange?: (args: PropertyChangeData) => void;
    onvalueChange?: (args: PropertyChangeData) => void;
    value?: string | number;
}>;

// ui/proxy-view-container/index.ts
type ProxyViewContainerAttributes = Override<LayoutBaseAttributes, {
    android?: any;
    ios?: any;
    isLayoutRequested?: boolean;
    onproxyChange?: (args: PropertyChangeData) => void;
    proxy?: string;
}>;

// ui/repeater/index.ts
type RepeaterAttributes = Override<CustomLayoutViewAttributes, {
    android?: any;
    ios?: any;
    itemTemplate?: string | Template;
    itemTemplateSelector?: string | ((item: any, index: number, items: any) => string);
    itemTemplates?: string | KeyedTemplate[];
    items?: string | any[] | RepeaterItemsSource;
    itemsLayout?: string | LayoutBase;
    onitemTemplateChange?: (args: PropertyChangeData) => void;
    onitemTemplatesChange?: (args: PropertyChangeData) => void;
    onitemsChange?: (args: PropertyChangeData) => void;
    onitemsLayoutChange?: (args: PropertyChangeData) => void;
}>;

// ui/layouts/root-layout/index.d.ts
type RootLayoutAttributes = Override<GridLayoutAttributes, {

}>;

// ui/scroll-view/index.d.ts
type ScrollViewAttributes = Override<ContentViewAttributes, {
    horizontalOffset?: number;
    isScrollEnabled?: string | boolean;
    onisScrollEnabledChange?: (args: PropertyChangeData) => void;
    onorientationChange?: (args: PropertyChangeData) => void;
    onscroll?: (args: ScrollEventData) => void;
    onscrollBarIndicatorVisibleChange?: (args: PropertyChangeData) => void;
    orientation?: "horizontal" | "vertical";
    scrollBarIndicatorVisible?: string | boolean;
    scrollableHeight?: number;
    scrollableWidth?: number;
    verticalOffset?: number;
}>;

// ui/search-bar/index.d.ts
type SearchBarAttributes = Override<ViewAttributes, {
    android?: any;
    hint?: string;
    ios?: any;
    onclose?: (args: EventData) => void;
    onhintChange?: (args: PropertyChangeData) => void;
    onsubmit?: (args: EventData) => void;
    ontextChange?: (args: PropertyChangeData) => void;
    ontextFieldBackgroundColorChange?: (args: PropertyChangeData) => void;
    ontextFieldHintColorChange?: (args: PropertyChangeData) => void;
    text?: string;
    textFieldBackgroundColor?: string | Color;
    textFieldHintColor?: string | Color;
}>;

// ui/segmented-bar/index.d.ts
type SegmentedBarAttributes = Override<ViewAttributes, {
    items?: string | SegmentedBarItem[];
    onitemsChange?: (args: PropertyChangeData) => void;
    onselectedIndexChange?: (args: PropertyChangeData) => void;
    onselectedIndexChanged?: (args: SelectedIndexChangedEventData) => void;
    selectedBackgroundColor?: string | Color;
    selectedIndex?: string | number;
}>;

// ui/segmented-bar/index.d.ts
type SegmentedBarItemAttributes = Override<ViewBaseAttributes, {
    title?: string;
}>;

// ui/slider/index.d.ts
type SliderAttributes = Override<ViewAttributes, {
    accessibilityRole?: AccessibilityRole;
    accessibilityStep?: string | number;
    accessible?: boolean;
    android?: any;
    ios?: any;
    maxValue?: string | number;
    minValue?: string | number;
    onmaxValueChange?: (args: PropertyChangeData) => void;
    onminValueChange?: (args: PropertyChangeData) => void;
    onvalueChange?: (args: PropertyChangeData) => void;
    value?: string | number;
}>;

// ui/text-base/span.ts
type SpanAttributes = Override<ViewBaseAttributes, {
    backgroundColor?: string | Color;
    color?: string | Color;
    fontFamily?: string;
    fontSize?: string | number;
    fontStyle?: "normal" | "italic";
    fontWeight?: "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "bold" | "700" | "800" | "900";
    tappable?: boolean;
    text?: string;
    textDecoration?: "none" | "underline" | "line-through" | "underline line-through";
}>;

// ui/layouts/stack-layout/index.d.ts
type StackLayoutAttributes = Override<LayoutBaseAttributes, {
    onorientationChange?: (args: PropertyChangeData) => void;
    orientation?: "horizontal" | "vertical";
}>;

// ui/switch/index.d.ts
type SwitchAttributes = Override<ViewAttributes, {
    android?: any;
    checked?: string | boolean;
    ios?: any;
    offBackgroundColor?: string | Color;
    oncheckedChange?: (args: PropertyChangeData) => void;
    onoffBackgroundColorChange?: (args: PropertyChangeData) => void;
}>;

// ui/tab-view/index.d.ts
type TabViewAttributes = Override<ViewAttributes, {
    android?: any;
    androidOffscreenTabLimit?: string | number;
    androidSelectedTabHighlightColor?: string | Color;
    androidSwipeEnabled?: string | boolean;
    androidTabsPosition?: "top" | "bottom";
    ios?: any;
    iosIconRenderingMode?: "automatic" | "alwaysOriginal" | "alwaysTemplate";
    items?: string | TabViewItem[];
    onandroidOffscreenTabLimitChange?: (args: PropertyChangeData) => void;
    onandroidSwipeEnabledChange?: (args: PropertyChangeData) => void;
    onandroidTabsPositionChange?: (args: PropertyChangeData) => void;
    oniosIconRenderingModeChange?: (args: PropertyChangeData) => void;
    onitemsChange?: (args: PropertyChangeData) => void;
    onselectedIndexChange?: (args: PropertyChangeData) => void;
    onselectedIndexChanged?: (args: TabViewSelectedIndexChangedEventData) => void;
    selectedIndex?: string | number;
    selectedTabTextColor?: string | Color;
    tabBackgroundColor?: string | Color;
    tabTextColor?: string | Color;
    tabTextFontSize?: string | number;
}>;

// ui/tab-view/index.d.ts
type TabViewItemAttributes = Override<ViewBaseAttributes, {
    canBeLoaded?: boolean;
    iconSource?: string;
    textTransform?: "none" | "initial" | "capitalize" | "uppercase" | "lowercase";
    title?: string;
    view?: View;
}>;

// ui/text-base/index.d.ts
type TextBaseAttributes = Override<ViewAttributes, {
    fontFamily?: string;
    fontSize?: string | number;
    fontStyle?: "normal" | "italic";
    fontWeight?: "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "bold" | "700" | "800" | "900";
    formattedText?: string | FormattedString;
    letterSpacing?: string | number;
    lineHeight?: string | number;
    onformattedTextChange?: (args: PropertyChangeData) => void;
    ontextChange?: (args: PropertyChangeData) => void;
    padding?: string | number | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    paddingBottom?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    paddingLeft?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    paddingRight?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    paddingTop?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    text?: string;
    textAlignment?: "left" | "right" | "center" | "initial";
    textDecoration?: "none" | "underline" | "line-through" | "underline line-through";
    textShadow?: string | CSSShadow;
    textTransform?: "none" | "initial" | "capitalize" | "uppercase" | "lowercase";
    whiteSpace?: "initial" | "normal" | "nowrap";
}>;

// ui/text-field/index.d.ts
type TextFieldAttributes = Override<EditableTextBaseAttributes, {
    android?: any;
    closeOnReturn?: string | boolean;
    ios?: any;
    oncloseOnReturnChange?: (args: PropertyChangeData) => void;
    onsecureChange?: (args: PropertyChangeData) => void;
    secure?: string | boolean;
    secureWithoutAutofill?: boolean;
}>;

// ui/text-view/index.d.ts
type TextViewAttributes = Override<EditableTextBaseAttributes, {
    android?: any;
    ios?: any;
    maxLines?: number;
}>;

// ui/time-picker/index.d.ts
type TimePickerAttributes = Override<ViewAttributes, {
    android?: any;
    hour?: string | number;
    ios?: any;
    iosPreferredDatePickerStyle?: string | number;
    maxHour?: string | number;
    maxMinute?: string | number;
    minHour?: string | number;
    minMinute?: string | number;
    minute?: string | number;
    minuteInterval?: string | number;
    onhourChange?: (args: PropertyChangeData) => void;
    oniosPreferredDatePickerStyleChange?: (args: PropertyChangeData) => void;
    onmaxHourChange?: (args: PropertyChangeData) => void;
    onmaxMinuteChange?: (args: PropertyChangeData) => void;
    onminHourChange?: (args: PropertyChangeData) => void;
    onminMinuteChange?: (args: PropertyChangeData) => void;
    onminuteChange?: (args: PropertyChangeData) => void;
    onminuteIntervalChange?: (args: PropertyChangeData) => void;
    ontimeChange?: (args: PropertyChangeData) => void;
    time?: string | Date;
}>;

// ui/core/view/index.d.ts
type ViewAttributes = Override<ViewBaseAttributes, {
    accessibilityHidden?: string | boolean;
    accessibilityHint?: string;
    accessibilityIdentifier?: string;
    accessibilityIgnoresInvertColors?: string | boolean;
    accessibilityLabel?: string;
    accessibilityLanguage?: string;
    accessibilityLiveRegion?: AccessibilityLiveRegion;
    accessibilityMediaSession?: string | boolean;
    accessibilityRole?: AccessibilityRole;
    accessibilityState?: AccessibilityState;
    accessibilityValue?: string;
    accessible?: string | boolean;
    android?: any;
    androidDynamicElevationOffset?: string | number;
    androidElevation?: string | number;
    automationText?: string;
    background?: string;
    backgroundColor?: string | Color;
    backgroundImage?: string | LinearGradient;
    backgroundPosition?: string;
    backgroundRepeat?: "repeat" | "repeat-x" | "repeat-y" | "no-repeat";
    backgroundSize?: string;
    bindingContext?: any;
    borderBottomColor?: string | Color;
    borderBottomLeftRadius?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    borderBottomRightRadius?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    borderBottomWidth?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    borderColor?: string | Color;
    borderLeftColor?: string | Color;
    borderLeftWidth?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    borderRadius?: string | number | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    borderRightColor?: string | Color;
    borderRightWidth?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    borderTopColor?: string | Color;
    borderTopLeftRadius?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    borderTopRightRadius?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    borderTopWidth?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    borderWidth?: string | number | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    boxShadow?: string | CSSShadow;
    color?: string | Color;
    column?: string | number;
    columnSpan?: string | number;
    css?: string;
    cssClasses?: Set<string>;
    cssPseudoClasses?: Set<string>;
    cssType?: string;
    dock?: "left" | "top" | "right" | "bottom";
    height?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit | CoreTypes.LengthPercentUnit;
    horizontalAlignment?: "left" | "right" | "stretch" | "center";
    ios?: any;
    iosIgnoreSafeArea?: string | boolean;
    iosOverflowSafeArea?: string | boolean;
    iosOverflowSafeAreaEnabled?: string | boolean;
    isEnabled?: string | boolean;
    isLayoutRequired?: boolean;
    isLayoutValid?: boolean;
    isUserInteractionEnabled?: string | boolean;
    left?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    margin?: string | number | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit | CoreTypes.LengthPercentUnit;
    marginBottom?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit | CoreTypes.LengthPercentUnit;
    marginLeft?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit | CoreTypes.LengthPercentUnit;
    marginRight?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit | CoreTypes.LengthPercentUnit;
    marginTop?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit | CoreTypes.LengthPercentUnit;
    minHeight?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    minWidth?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    modal?: View;
    onaccessibilityHintChange?: (args: PropertyChangeData) => void;
    onaccessibilityIdentifierChange?: (args: PropertyChangeData) => void;
    onaccessibilityIgnoresInvertColorsChange?: (args: PropertyChangeData) => void;
    onaccessibilityLabelChange?: (args: PropertyChangeData) => void;
    onaccessibilityValueChange?: (args: PropertyChangeData) => void;
    onandroidBackPressed?: (args: EventData) => void;
    oncolumnChange?: (args: PropertyChangeData) => void;
    oncolumnSpanChange?: (args: PropertyChangeData) => void;
    ondockChange?: (args: PropertyChangeData) => void;
    ondoubleTap?: (arg: TapGestureEventData) => any;
    oniosIgnoreSafeAreaChange?: (args: PropertyChangeData) => void;
    oniosOverflowSafeAreaChange?: (args: PropertyChangeData) => void;
    oniosOverflowSafeAreaEnabledChange?: (args: PropertyChangeData) => void;
    onisEnabledChange?: (args: PropertyChangeData) => void;
    onisUserInteractionEnabledChange?: (args: PropertyChangeData) => void;
    onleftChange?: (args: PropertyChangeData) => void;
    onloaded?: (args: EventData) => void;
    onlongPress?: (arg: GestureEventData) => any;
    onoriginXChange?: (args: PropertyChangeData) => void;
    onoriginYChange?: (args: PropertyChangeData) => void;
    onpan?: (arg: PanGestureEventData) => any;
    onpinch?: (arg: PinchGestureEventData) => any;
    onrotation?: (arg: RotationGestureEventData) => any;
    onrowChange?: (args: PropertyChangeData) => void;
    onrowSpanChange?: (args: PropertyChangeData) => void;
    onshowingModally?: (args: ShownModallyData) => void;
    onshownModally?: (args: ShownModallyData) => void;
    onswipe?: (arg: SwipeGestureEventData) => any;
    ontap?: (arg: TapGestureEventData) => any;
    ontopChange?: (args: PropertyChangeData) => void;
    ontouch?: (arg: TouchGestureEventData) => any;
    onunloaded?: (args: EventData) => void;
    opacity?: string | number;
    originX?: string | number;
    originY?: string | number;
    perspective?: string | number;
    rotate?: string | number;
    rotateX?: string | number;
    rotateY?: string | number;
    row?: string | number;
    rowSpan?: string | number;
    scaleX?: string | number;
    scaleY?: string | number;
    textTransform?: "none" | "initial" | "capitalize" | "uppercase" | "lowercase";
    top?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    translateX?: string | number;
    translateY?: string | number;
    verticalAlignment?: "top" | "bottom" | "stretch" | "middle";
    visibility?: "hidden" | "visible" | "collapse" | "collapsed";
    width?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit | CoreTypes.LengthPercentUnit;
}>;

// ui/core/view-base/index.ts
type ViewBaseAttributes = Override<ObservableAttributes, {
    alignSelf?: "auto" | "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
    android?: any;
    bindingContext?: string | any;
    class?: string;
    className?: string;
    col?: number;
    colSpan?: number;
    column?: number;
    columnSpan?: number;
    cssClasses?: Set<string>;
    cssPseudoClasses?: Set<string>;
    dock?: "left" | "top" | "right" | "bottom";
    domNode?: DOMNode;
    effectiveBorderBottomWidth?: number;
    effectiveBorderLeftWidth?: number;
    effectiveBorderRightWidth?: number;
    effectiveBorderTopWidth?: number;
    effectiveHeight?: number;
    effectiveLeft?: number;
    effectiveMarginBottom?: number;
    effectiveMarginLeft?: number;
    effectiveMarginRight?: number;
    effectiveMarginTop?: number;
    effectiveMinHeight?: number;
    effectiveMinWidth?: number;
    effectivePaddingBottom?: number;
    effectivePaddingLeft?: number;
    effectivePaddingRight?: number;
    effectivePaddingTop?: number;
    effectiveTop?: number;
    effectiveWidth?: number;
    flexGrow?: number;
    flexShrink?: number;
    flexWrapBefore?: boolean;
    hidden?: string | boolean;
    id?: string;
    ios?: any;
    isCollapsed?: any;
    isLoaded?: boolean;
    left?: number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    nativeView?: any;
    onbindingContextChange?: (args: PropertyChangeData) => void;
    onclassNameChange?: (args: PropertyChangeData) => void;
    onhiddenChange?: (args: PropertyChangeData) => void;
    onidChange?: (args: PropertyChangeData) => void;
    order?: number;
    page?: Page;
    parent?: ViewBase;
    parentNode?: ViewBase;
    recycleNativeView?: "always" | "never" | "auto";
    reusable?: boolean;
    row?: number;
    rowSpan?: number;
    style?: string | Style;
    top?: number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    typeName?: string;
    viewController?: any;
}>;

// ui/web-view/index.d.ts
type WebViewAttributes = Override<ViewAttributes, {
    android?: any;
    canGoBack?: boolean;
    canGoForward?: boolean;
    ios?: any;
    onloadFinished?: (args: LoadEventData) => void;
    onloadStarted?: (args: WebViewInterfacesLoadEventData) => void;
    src?: string;
}>;

// ui/layouts/wrap-layout/index.d.ts
type WrapLayoutAttributes = Override<LayoutBaseAttributes, {
    effectiveItemHeight?: number;
    effectiveItemWidth?: number;
    itemHeight?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    itemWidth?: string | number | "auto" | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;
    onitemHeightChange?: (args: PropertyChangeData) => void;
    onitemWidthChange?: (args: PropertyChangeData) => void;
    onorientationChange?: (args: PropertyChangeData) => void;
    orientation?: "horizontal" | "vertical";
}>;


interface IntrinsicElements {
        absoluteLayout: AbsoluteLayoutAttributes;
        actionBar: ActionBarAttributes;
        actionItem: ActionItemAttributes;
        activityIndicator: ActivityIndicatorAttributes;
        button: ButtonAttributes;
        containerView: ContainerViewAttributes;
        contentView: ContentViewAttributes;
        customLayoutView: CustomLayoutViewAttributes;
        datePicker: DatePickerAttributes;
        dockLayout: DockLayoutAttributes;
        flexboxLayout: FlexboxLayoutAttributes;
        formattedString: FormattedStringAttributes;
        frame: FrameAttributes;
        gridLayout: GridLayoutAttributes;
        htmlView: HtmlViewAttributes;
        image: ImageAttributes;
        label: LabelAttributes;
        listPicker: ListPickerAttributes;
        listView: ListViewAttributes;
        navigationButton: NavigationButtonAttributes;
        page: PageAttributes;
        placeholder: PlaceholderAttributes;
        progress: ProgressAttributes;
        proxyViewContainer: ProxyViewContainerAttributes;
        repeater: RepeaterAttributes;
        rootLayout: RootLayoutAttributes;
        scrollView: ScrollViewAttributes;
        searchBar: SearchBarAttributes;
        segmentedBar: SegmentedBarAttributes;
        segmentedBarItem: SegmentedBarItemAttributes;
        slider: SliderAttributes;
        span: SpanAttributes;
        stackLayout: StackLayoutAttributes;
        switch: SwitchAttributes;
        tabView: TabViewAttributes;
        tabViewItem: TabViewItemAttributes;
        textField: TextFieldAttributes;
        textView: TextViewAttributes;
        timePicker: TimePickerAttributes;
        view: ViewAttributes;
        webView: WebViewAttributes;
        wrapLayout: WrapLayoutAttributes; 
}


}
}
